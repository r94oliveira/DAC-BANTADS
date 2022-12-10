export class Cliente {
  constructor(
    public id?: number,
    public nome?: string,
    public email?: string,
    public cpf?: string,
    public telefone?: string,
    public salario?: number,
    public rua?: string,
    public logradouro?: string,
    public numero?: number,
    public complemento?: string,
    public cep?: string,
    public cidade?: string,
    public estado?: string
  ) {}
}
