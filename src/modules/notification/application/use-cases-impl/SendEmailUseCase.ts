import IUseCase from '@common/interfaces/IUseCase';
import { inject, injectable } from 'inversify';
import ISendEmailDTO from '../../domain/dtos/ISendEmailDTO';
import TYPES from '@common/ioc/types';
import IEmailSender from '@modules/notification/domain/interfaces/IEmailSender';

export default
@injectable()
class SendEmailUseCase implements IUseCase<ISendEmailDTO, void> {
  constructor(@inject(TYPES.IEmailSender) private readonly emailSender: IEmailSender) {}

  public async execute(sendEmailDTO: ISendEmailDTO): Promise<void> {
    return this.emailSender.sendEmail(sendEmailDTO);
  }
}
