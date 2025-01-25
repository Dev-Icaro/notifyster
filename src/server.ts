import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import httpContext from 'express-http-context';
import express, { NextFunction, Request, Response } from 'express';
import routes from '@common/http/routes';
import logger from '@common/utils/logger';
import AppException from '@common/exceptions/AppException';
import { HttpStatus } from '@common/utils/systemConstants';
import { v4 as uuidv4 } from 'uuid';
import container from '@common/ioc/inversify.config';
import IMessageBroker from '@common/interfaces/IMessageBroker';
import TYPES from '@common/ioc/types';

const app = express();

app.use(httpContext.middleware);
app.use(function (req, res, next) {
  httpContext.set('reqId', uuidv4());
  next();
});

app.use(express.json());
app.use(routes);

app.use((error: Error, req: Request, res: Response, _: NextFunction) => {
  if (error instanceof AppException) {
    logger.error(error);
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  } else {
    logger.error(error.message);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
});

const APP_PORT = process.env.APP_PORT || 5000;
app.listen(APP_PORT, async () => {
  logger.info(`Server started on port ${process.env.APP_PORT || 5000}!`);

  const broker = container.get<IMessageBroker>(TYPES.IMessageBroker);
  await broker.consume();
});
