import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transacao, Cliente, Conta } from 'src/app/shared';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss'],
})
export class TransferenciaComponent implements OnInit {
  @ViewChild('formTransferir') formTransferir!: NgForm;
  transacao!: Transacao;
  cliente!: Cliente;
  conta!: Conta;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    // Operador + (antes do this) converte para número
    let id = +this.route.snapshot.params['id'];

    // Com o id, obtém a pessoa
    this.clienteService.buscarPorId(id).subscribe((res) => {
      if (res) {
        this.cliente = res;
      } else {
        throw new Error('Cliente não encontrado: id = ' + id);
      }
    });
  }

  transferir(): void {
    // Verifica se o formulário é válido
    if (this.formTransferir.form.valid) {
      // cod depositar

      // Redireciona para /pessoas/listar
      this.router.navigate(['/cliente/home']);
    }
  }
}
