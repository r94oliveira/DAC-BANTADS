import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transacao, Cliente, Conta } from 'src/app/shared';
import { ClienteService } from '../services/cliente.service';
import { LoginService } from 'src/app/auth/services/login.service';
import { ContaService } from 'src/app/conta/services/conta.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalMessageComponent } from '../modal-message/modal-message.component';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.scss'],
})
export class DepositarComponent implements OnInit {
  @ViewChild('formDepositar') formDepositar!: NgForm;
  transacao: Transacao = new Transacao();
  cliente!: Cliente;
  conta: Conta = new Conta();
  mensagem: string = '';

  constructor(
    private clienteService: ClienteService,
    private loginService: LoginService,
    private contaService: ContaService,
    private router: Router,
    private modalService: NgbModal
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

  abrirModal() {
    this.modalService.open(ModalMessageComponent);
  }

  depositar(): void {
    // Verifica se o formulário é válido
    if (this.formDepositar.form.valid) {
      // cod depositar
      this.contaService.buscarPorIdCliente(this.cliente.id).subscribe((conta) => {
        conta = this.tratarRespostaSubscribe(conta);
        conta.saldo += Number(this.transacao.valorTransacao)
        this.contaService.alterar(conta).subscribe((res) => res);
      })
      this.abrirModal();
      //this.router.navigate(['/cliente/home']);
    } else {
      this.mensagem = "Ocorreu um erro ao realizar o depósito.";
    }
  }
}
