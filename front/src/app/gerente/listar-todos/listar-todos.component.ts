import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/cliente';
import { Cliente } from 'src/app/shared';

@Component({
  selector: 'app-listar-todos',
  templateUrl: './listar-todos.component.html',
  styleUrls: ['./listar-todos.component.scss']
})
export class ListarTodosComponent implements OnInit {
  clientes: Cliente[] = []

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.listarTodos().subscribe(res => {
      this.clientes = res
    })
  }

}
