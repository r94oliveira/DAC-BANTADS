import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { ContaService } from 'src/app/conta/services/conta.service';
import { GerenteService } from '../services';
import { Cliente } from 'src/app/shared';

@Component({
  selector: 'app-modal-rejeitar',
  templateUrl: './modal-rejeitar.component.html',
  styleUrls: ['./modal-rejeitar.component.scss'],
})
export class ModalRejeitarComponent implements OnInit {
  @Input() cliente!: Cliente;

  constructor(
    public activeModal: NgbActiveModal,
    private clienteService: ClienteService,
    private contaService: ContaService,
    private gerenteService: GerenteService
  ) {}

  ngOnInit(): void {}

  rejeitar() {
    // deletar a conta
    this.contaService.buscarPorIdCliente(this.cliente.id).subscribe((res) => {
      res = Object.values(res).reduce((a, b) => {
        return a;
      });

      this.gerenteService.buscarPorId(res.idGerente).subscribe((res) => {
        res.numeroClientes--;
        this.gerenteService.alterar(res).subscribe((res) => res);
      });

      this.contaService.remover(res.id).subscribe((res) => res);
    });

    // deletar o cliente
    this.clienteService.remover(this.cliente.id).subscribe((res) => res);

    // fechar o modal
    this.activeModal.close();
  }
}
