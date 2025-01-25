import IUseCase from '@common/interfaces/IUseCase';
import TYPES from '@common/ioc/types';
import { HttpStatus } from '@common/utils/systemConstants';
import ISendEmailDTO from '@modules/notification/domain/dtos/ISendEmailDTO';
import { Request, Response } from 'express';
import { inject } from 'inversify';

export default class EmailController {
  constructor(
    @inject(TYPES.IEnqueueEmailUseCase) private readonly enqueueEmailUseCase: IUseCase<ISendEmailDTO, any>,
  ) {}

  public async send(request: Request, response: Response) {
    await this.enqueueEmailUseCase.execute(request.body);
    return response.status(HttpStatus.ACCEPTED).send();
  }

  public async getById(request: Request, response: Response) {
    return response.status(200).json({ message: 'Email found' });
  }

  public async getAll(request: Request, response: Response) {
    return response.status(200).json({ message: 'Emails found' });
  }
}
