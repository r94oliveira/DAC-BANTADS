import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transacao, Cliente, Conta } from 'src/app/shared';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TransferenciaService } from './services';
import { ContaService } from 'src/app/conta/services/conta.service';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss'],
})
export class TransferenciaComponent implements OnInit {
  @ViewChild('formTransferir') formTransferir!: NgForm;
  transacao: Transacao = new Transacao();
  cliente: Cliente = new Cliente();
  conta: Conta = new Conta();

  constructor(
    private clienteService: ClienteService,
    private transferenciaService: TransferenciaService,
    private contaService: ContaService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];

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

  transferir(): void {
    if (this.formTransferir.form.valid) {
      // cod depositar

      // Redireciona para /pessoas/listar
      this.router.navigate(['/cliente/home']);
    }
  }
}
