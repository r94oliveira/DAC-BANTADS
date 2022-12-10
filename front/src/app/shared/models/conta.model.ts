export class Conta {
  constructor(
    public id?: number,
    public idCliente?: number,
    public dataCriacao?: Date,
    public limite?: number,
    public ativo?: boolean,
    public saldo?: number,
    public idGerente?: number
  ) {}
}
