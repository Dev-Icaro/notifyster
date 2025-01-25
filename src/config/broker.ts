import { Kafka } from 'kafkajs';

export default new Kafka({
  clientId: 'notifyster',
  brokers: [process.env.KAFKA_BROKER],
});
