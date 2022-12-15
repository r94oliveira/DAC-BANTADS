export class Transacao {
  constructor(
    public id?: number,
    public idCliente?: number,
    public tipoTransacao?: string,
    public valorTransacao?: number,
    public destinatario?: number,
    public saldo?: number,
    public data?: number
  ) {}
}
