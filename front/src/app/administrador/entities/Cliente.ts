import { Endereco } from "./Endereco"

export interface Cliente {
  nome: String
  email: String
  cpf: String
  endereco: Endereco
  cpfGerente: String
  limite: number
  saldo: number
}
