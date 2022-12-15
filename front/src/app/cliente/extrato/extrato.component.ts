import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared';
import { ClienteService } from '../services/cliente.service';
import { LoginService } from 'src/app/auth/services/login.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  @ViewChild('formExtrato') formExtrato!: NgForm;
  cliente!: Cliente;

  constructor(
    private clienteService: ClienteService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    // Operador + (antes do this) converte para número
    let id = +this.route.snapshot.params['id'];

    this.clienteService
    .buscarPorEmail(this.loginService.usuarioLogado.email)
    .subscribe((cliente) => {
      if (cliente) {
        cliente = this.tratarRespostaSubscribe(cliente);
        this.cliente = cliente;
      } else {
        throw new Error('Cliente não encontrado: id = ' + id);
      }
    });
  }

  tratarRespostaSubscribe(res: any) {
    res = Object.values(res).reduce((a, b) => {
      return a;
    });

    return res;
  }

  gerarExtrato(): void {
    // Verifica se o formulário é válido
    if (this.formExtrato.form.valid) {
      //código gerar extrato

    }
  }
}
