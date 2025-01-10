import routes from '@common/http/routes';
import logger from '@common/utils/logger';
import 'dotenv/config';
import express from 'express';

const app = express();

app.use(routes);

const APP_PORT = process.env.APP_PORT || 5000;
app.listen(APP_PORT, async () => {
  logger.info(`Server started on port ${process.env.APP_PORT || 5000}!`);

  // const consumer = kafka.consumer({ groupId: 'test-group' });

  // await consumer.connect();
  // await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  // await consumer.run({
  //   eachMessage: async ({ topic, partition, message }) => {
  //     console.log({
  //       value: `${topic} - ${message.value.toString()} - ${partition}`,
  //     });
  //   },
  // });
});
