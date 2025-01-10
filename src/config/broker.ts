import { Kafka } from 'kafkajs';

export default new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
});
