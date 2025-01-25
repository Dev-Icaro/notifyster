export default interface IMessageBroker {
  send(message: string): Promise<void>;
  consume(): Promise<void>;
}
