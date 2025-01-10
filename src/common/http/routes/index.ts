import notificationRouter from '@modules/notification/presentation/routes/notification.routes';
import { Router } from 'express';

//TODO: Create an healthcheck
const routes = Router();

routes.use('/notification', notificationRouter);

export default routes;
