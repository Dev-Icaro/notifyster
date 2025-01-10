import { Request, Response } from 'express';

export default class EmailController {
  public async send(request: Request, response: Response) {
    return response.status(200).json({ message: 'Email sent' });
  }

  public async getById(request: Request, response: Response) {
    return response.status(200).json({ message: 'Email found' });
  }

  public async getAll(request: Request, response: Response) {
    return response.status(200).json({ message: 'Emails found' });
  }
}
