export class Conta {
  constructor(
    public id?: number,
    public idUsuario?: number,
    public dataCriacao?: Date,
    public limite?: number,
    public ativo?: boolean,
    public saldo?: number,
    public idGerente?: number,
    public salarioCliente?: number    
  ) {}
}
