import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/shared';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss']
})
export class AlterarComponent implements OnInit {
  @ViewChild("formAlterar") formAlterar!: NgForm;
  usuario!: Usuario;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    // Operador + (antes do this) converte para número
    let id = +this.route.snapshot.params['id'];

    // Com o id, obtém a pessoa
    const res = this.clienteService.buscarPorId(id);
    if (res !== undefined) {
      this.usuario = res;
    } else {
      throw new Error ("Cliente não encontrado: id = " + id);
    }
  }

  alterar(): void {
    // Verifica se o formulário é válido
    if (this.formAlterar.form.valid) {
      // Efetivamente atualiza a pessoa
      this.clienteService.alterar(this.usuario);
      // Redireciona para /pessoas/listar
      this.router.navigate(['/cliente/home']);
    }
  }
}