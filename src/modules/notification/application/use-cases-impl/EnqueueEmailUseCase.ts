import IMessageBroker from '@common/interfaces/IMessageBroker';
import IUseCase from '@common/interfaces/IUseCase';
import TYPES from '@common/ioc/types';
import ISendEmailDTO from '@modules/notification/domain/dtos/ISendEmailDTO';
import { inject } from 'inversify';

export default class EnqueueEmailUseCase implements IUseCase<ISendEmailDTO, void> {
  constructor(@inject(TYPES.IMessageBroker) private readonly messageBroker: IMessageBroker) {}

  public async execute(sendEmailDTO: ISendEmailDTO): Promise<void> {
    this.messageBroker.send(JSON.stringify(sendEmailDTO));
  }
}
