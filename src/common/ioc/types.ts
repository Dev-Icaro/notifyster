const TYPES = {
  ISendEmailUseCase: Symbol.for('ISendEmailUseCase'),
  IEnqueueEmailUseCase: Symbol.for('IEnqueueEmailUseCase'),
  IEmailSender: Symbol.for('IEmailSender'),
  IMessageBroker: Symbol.for('IMessageBroker'),
};

export default TYPES;
