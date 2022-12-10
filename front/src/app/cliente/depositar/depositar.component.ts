import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transacao, Cliente } from 'src/app/shared';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.scss'],
})
export class DepositarComponent implements OnInit {
  @ViewChild('formDepositar') formDepositar!: NgForm;
  transacao!: Transacao;
  cliente!: Cliente;

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

  depositar(): void {
    // Verifica se o formulário é válido
    if (this.formDepositar.form.valid) {
      // cod depositar

      // Redireciona para /pessoas/listar
      this.router.navigate(['/cliente/home']);
    }
  }
}
