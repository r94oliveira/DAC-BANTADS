export class Usuario {
  constructor(
    public id?: number,
    public nome?: string,
    public email?: string,
    public senha?: string,
    public cargo?: string,
    public idCliente?: number,
    public idConta?: number
  ) {}
}
