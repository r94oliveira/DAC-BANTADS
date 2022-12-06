export class Transacao {
  constructor (
      public id?: number,
      public idCliente?: number,
      public tipoTransacao?: number,
      public valorTransacao?: number,
      public destinatario?: string,
      public saldo?: number,
      public data?: number
  ) {

  }
}
