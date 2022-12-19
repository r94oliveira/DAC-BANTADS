export class Transacao {
  constructor(
    public valorTransacao?: number,
    public id?: number,
    public idCliente?: number,
    public tipoTransacao?: string,
    public destinatario?: number,
    public saldo?: number,
    public data?: Date
  ) {}
}
