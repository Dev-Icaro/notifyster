interface IUseCase<I, O> {
  execute(input: I): Promise<O>;
}

export default IUseCase;
