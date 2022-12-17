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

  sacar(valor: Transacao['valorTransacao']): void {
    //fazer o metodo sacar verificando se saldo disponivel é maior ou igual ao valor do saque
  }

  depositar(valor: Transacao['valorTransacao']): void {
    //fazer o metodo depositar
  }

  transferir(valor: Transacao['valorTransacao']): void {
    //fazer o metodo transferir verificando se saldo disponível é maior ou igual ao valor de transferencia
  }
}
