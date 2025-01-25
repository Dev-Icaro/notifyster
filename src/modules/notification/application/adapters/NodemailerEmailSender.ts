import nodemailer from 'nodemailer';
import ISendEmailDTO from '@modules/notification/domain/dtos/ISendEmailDTO';
import IEmailSender from '@modules/notification/domain/interfaces/IEmailSender';
import { injectable } from 'inversify';

export default
@injectable()
class NodemailerEmailSender implements IEmailSender {
  private transporter: any;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  public async sendEmail(sendEmailDTO: ISendEmailDTO): Promise<void> {
    await this.transporter.sendMail(sendEmailDTO);
  }
}
