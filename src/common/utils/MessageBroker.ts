import kafka from '@config/broker';
import IMessageBroker from '@common/interfaces/IMessageBroker';
import { Consumer, Producer } from 'kafkajs';
import { injectable } from 'inversify';
import logger from './logger';

export default
@injectable()
class KafkaMessageBroker implements IMessageBroker {
  private _producer: Producer;
  private _consumer: Consumer;

  constructor() {
    this._producer = kafka.producer();
    this._consumer = kafka.consumer({ groupId: 'notifyster-group' });
  }

  public async send(message: string): Promise<void> {
    await this._producer.connect();
    try {
      await this._producer.send({
        topic: 'notification',
        messages: [{ value: message }],
      });
    } finally {
      await this._producer.disconnect();
    }
  }

  public async consume(): Promise<void> {
    await this._consumer.connect();
    await this._consumer.subscribe({ topic: 'notification', fromBeginning: true });

    await this._consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        logger.info(`received on ${topic} - ${message.value.toString()} - ${partition}`);
      },
    });
  }
}
