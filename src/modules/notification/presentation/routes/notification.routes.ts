import { Router } from 'express';
import emailRouter from './email.routes';

const notification = Router();

notification.use('/email', emailRouter);

export default notification;
