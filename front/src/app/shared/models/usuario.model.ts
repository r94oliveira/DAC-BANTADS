export class Usuario {
  constructor(
    public id?: number,
    public nome?: string,
    public email?: string,
    public senha?: string,
    public cargo?: string,
    public cpf?: string,
    public telefone?: string,
    public estado?: string,
    public cidade?: string,
    public cep?: string,
    public rua?: string,
    public numero?: number,
    public complemento?: string,
    public salarioCliente?: number 
  ) {}
}
