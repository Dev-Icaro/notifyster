import { Router } from 'express';
import EmailController from '../controllers/EmailController';
import container from '@common/ioc/inversify.config';

const emailRouter = Router();
const emailController = container.resolve(EmailController);

emailRouter.post('/send', emailController.send.bind(emailController));
emailRouter.get('/:id', emailController.getById.bind(emailController));
emailRouter.get('/', emailController.getAll.bind(emailController));

export default emailRouter;
