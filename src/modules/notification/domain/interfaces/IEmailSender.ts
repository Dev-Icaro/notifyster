import ISendEmailDTO from '../dtos/ISendEmailDTO';

export default interface IEmailSender {
  sendEmail(sendEmailDTO: ISendEmailDTO): Promise<void>;
}
