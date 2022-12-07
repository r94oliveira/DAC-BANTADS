import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared';
import { ClienteService } from '../services';

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.scss']
})
export class AlterarComponent implements OnInit {
  @ViewChild('formAlterar') formAlterar!: NgForm;
  usuario! : Usuario;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  alterar(): void {
    if(this.formAlterar.form.valid) {
      this.clienteService.alterar(this.usuario);
      this.router.navigate( ["/cliente"] );
    }
  }
}
