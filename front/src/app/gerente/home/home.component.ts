import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRejeitarComponent } from '../modal-rejeitar';
import { Cliente } from 'src/app/shared';
import { ClienteService } from 'src/app/cliente';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.clienteService.listarTodos().subscribe((res) => {
      if (res) {
        this.clientes = res;
      }
    });
  }

  aprovar($event: any, cliente: Cliente) {
    $event.preventDefault();

    if (confirm(`Deseja realmente aprovar o(a) cliente ${cliente.nome}?`)) {
    }
  }

  abrirModalRejeitar(cliente: Cliente) {
    const modalRef = this.modalService.open(ModalRejeitarComponent);
    modalRef.componentInstance.cliente = cliente;
  }
}
