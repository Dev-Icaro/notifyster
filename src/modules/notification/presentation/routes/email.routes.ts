import { Router } from 'express';
import EmailController from '../controllers/EmailController';

const emailRouter = Router();
const emailController = new EmailController();

emailRouter.post('/send', emailController.send.bind(emailController));
emailRouter.get('/:id', emailController.getById.bind(emailController));
emailRouter.get('/', emailController.getAll.bind(emailController));

export default emailRouter;
