import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/auth/services/login.service';
import { ContaService } from 'src/app/conta/services/conta.service';
import { Cliente, Conta, Transacao } from 'src/app/shared';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.scss'],
})
export class SaqueComponent implements OnInit {
  @ViewChild('formSacar') formSacar!: NgForm;
  transacao: Transacao = new Transacao();;
  cliente!: Cliente;
  conta: Conta = new Conta();

  constructor(
    private clienteService: ClienteService,
    private loginService: LoginService,
    private contaService: ContaService,
  ) { }

  ngOnInit(): void {
    this.clienteService
      .buscarPorEmail(this.loginService.usuarioLogado.email)
      .subscribe((cliente) => {
        if (cliente) {
          cliente = this.tratarRespostaSubscribe(cliente);
          this.cliente = cliente;

          this.contaService.buscarPorIdCliente(this.cliente.id).subscribe((conta) => {
            this.conta = this.tratarRespostaSubscribe(conta);
          })
        } else {
          throw new Error('Cliente não encontrado: email = '
            + this.loginService.usuarioLogado.email);
        }
      });
  }

  tratarRespostaSubscribe(res: any) {
    res = Object.values(res).reduce((a, b) => {
      return a;
    });

    return res;
  }

  //sacar do service transferencia -- tem que verificar se saldo é maior que valor
  sacar(): void {
    if (this.formSacar.form.valid) {
      // cod sacar
      let diff = this.conta.saldo - Number(this.transacao.valorTransacao)
      
      if (diff >= 0) {
        this.conta.saldo -= Number(this.transacao.valorTransacao)
        this.contaService.alterar(this.conta).subscribe((res) => res)
      }
    }
  }
}
