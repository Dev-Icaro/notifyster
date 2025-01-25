import { Container } from 'inversify';
import TYPES from './types';
import IUseCase from '@common/interfaces/IUseCase';
import SendEmailUseCase from '@modules/notification/application/use-cases-impl/SendEmailUseCase';
import ISendEmailDTO from '@modules/notification/domain/dtos/ISendEmailDTO';
import IEmailSender from '@modules/notification/domain/interfaces/IEmailSender';
import NodemailerEmailSender from '@modules/notification/application/adapters/NodemailerEmailSender';
import IMessageBroker from '@common/interfaces/IMessageBroker';
import KafkaMessageBroker from '@common/utils/MessageBroker';
import EnqueueEmailUseCase from '@modules/notification/application/use-cases-impl/EnqueueEmailUseCase';

const container = new Container();

container
  .bind<IUseCase<ISendEmailDTO, void>>(TYPES.ISendEmailUseCase)
  .to(SendEmailUseCase)
  .inSingletonScope();
container
  .bind<IUseCase<ISendEmailDTO, void>>(TYPES.IEnqueueEmailUseCase)
  .to(EnqueueEmailUseCase)
  .inSingletonScope();
container.bind<IEmailSender>(TYPES.IEmailSender).to(NodemailerEmailSender).inSingletonScope();
container.bind<IMessageBroker>(TYPES.IMessageBroker).to(KafkaMessageBroker).inSingletonScope();

export default container;
