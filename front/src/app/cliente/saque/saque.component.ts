import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { ContaService } from 'src/app/conta/services/conta.service';
import { Cliente, Conta, Gerente, Transacao } from 'src/app/shared';
import { ClienteService } from '../services';
import { TransferenciaService } from '../transferencia';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.scss'],
})
export class SaqueComponent implements OnInit {
  @ViewChild('formSacar') formSacar!: NgForm;
  transacao: Transacao = new Transacao();
  conta: Conta = new Conta();
  cliente: Cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    private transferenciaService: TransferenciaService,
    private contaService: ContaService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.transacao = new Transacao();
    this.clienteService
    .buscarPorEmail(this.loginService.usuarioLogado.email)
    .subscribe((cliente) => {
      cliente = this.tratarRespostaSubscribe(cliente);
      this.cliente = cliente;

      this.contaService.buscarPorIdCliente(cliente.id).subscribe((conta) => {
        conta = this.tratarRespostaSubscribe(conta);
        this.conta = conta;
      });
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
      this.transferenciaService.sacar(this.transacao.valorTransacao);
      this.router.navigate(['/cliente/home']);
    }
  }
}
