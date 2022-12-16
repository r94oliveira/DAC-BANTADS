import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transacao, Cliente } from 'src/app/shared';
import { ClienteService } from '../services/cliente.service';
import { LoginService } from 'src/app/auth/services/login.service';
import { ContaService } from 'src/app/conta/services/conta.service';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.scss'],
})
export class DepositarComponent implements OnInit {
  @ViewChild('formDepositar') formDepositar!: NgForm;
  transacao: Transacao = new Transacao();
  cliente!: Cliente;

  constructor(
    private clienteService: ClienteService,
    private loginService: LoginService,
    private contaService: ContaService,
  ) { }

  ngOnInit(): void {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    // Operador + (antes do this) converte para número
    this.clienteService
      .buscarPorEmail(this.loginService.usuarioLogado.email)
      .subscribe((cliente) => {
        if (cliente) {
          cliente = this.tratarRespostaSubscribe(cliente);
          this.cliente = cliente;
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

  depositar(): void {
    // Verifica se o formulário é válido
    if (this.formDepositar.form.valid) {
      // cod depositar
      this.contaService.buscarPorIdCliente(this.cliente.id).subscribe((conta) => {
        conta = this.tratarRespostaSubscribe(conta);
        conta.saldo += Number(this.transacao.valorTransacao)
        this.contaService.alterar(conta).subscribe((res) => res)
      })
    }
  }
}
