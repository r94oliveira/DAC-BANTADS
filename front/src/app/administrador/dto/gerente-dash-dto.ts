import { Gerente } from "../entities/Gerente"

export interface GerenteDashDto {
  gerente: Gerente
  totalClientes: number
  totalSaldoNegativo: number
  totalSaldoPositivo: number
}
