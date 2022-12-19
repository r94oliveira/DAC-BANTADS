import { Injectable } from '@angular/core';
import { Transacao } from 'src/app/shared';

const LS_CHAVE: string = 'transacoes';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  constructor() {}

  mostrarSaldo(): Transacao[] {
    const transacoes = localStorage[LS_CHAVE];
    return transacoes ? JSON.parse(transacoes.valorTransacao) : [];
  }
  
  transferir(valor: Transacao['valorTransacao']): void {
    //fazer o metodo transferir verificando se saldo disponível é maior ou igual ao valor de transferencia
  }
}
