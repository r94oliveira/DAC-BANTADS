import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/cliente';
import { ContaService } from 'src/app/conta/services/conta.service';
import { Cliente, Conta } from 'src/app/shared';
import { ModalVerClienteComponent } from '../modal-ver-cliente';

@Component({
  selector: 'app-listar-todos',
  templateUrl: './listar-todos.component.html',
  styleUrls: ['./listar-todos.component.scss'],
})
export class ListarTodosComponent implements OnInit {
  data: any = [];

  constructor(
    private clienteService: ClienteService,
    private contaService: ContaService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.popularData();

    // pegar a pesquisa pra filtrar por nome ou cpf
    document
      .querySelector('#nome')
      ?.addEventListener('input', this.pesquisar.bind(this), false);
    document
      .querySelector('#cpf')
      ?.addEventListener('input', this.pesquisar.bind(this), false);
  }

  pesquisar(event: any) {
    let target = event.currentTarget;
    let type = target.name;

    if (target.value !== '') {
      let aux: any = [];

      this.clienteService?.listarTodos().subscribe((clientes) => {
        clientes.forEach((cliente: any) => {
          // pega apenas os clientes que batem com o valor digitado
          if (
            cliente[type].toLowerCase().includes(target.value.toLowerCase())
          ) {
            this.contaService
              .buscarPorIdCliente(cliente.id)
              .subscribe((conta) => {
                conta = Object.values(conta).reduce((a, b) => {
                  return a;
                });

                // cria um objeto para adicionar no array data
                let obj = {
                  cliente: cliente,
                  conta: conta,
                };

                // o array data serve para mostrar
                // linha a linha cada cliente com sua respectiva conta
                aux.push(obj);
              });
          }
        });
      });

      this.data = aux;
    } else {
      this.data = [];
      this.popularData();
    }
  }

  popularData() {
    this.clienteService.listarTodos().subscribe((clientes) => {
      // ordena pelo nome
      clientes.sort((a: Cliente, b: Cliente) =>
        a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0
      );

      // itera pelos clientes
      clientes.forEach((cliente: Cliente) => {
        // pega a conta de cada cliente
        this.contaService.buscarPorIdCliente(cliente.id).subscribe((conta) => {
          conta = Object.values(conta).reduce((a, b) => {
            return a;
          });

          // cria um objeto para adicionar no array data
          let obj = {
            cliente: cliente,
            conta: conta,
          };

          // o array data serve para mostrar
          // linha a linha cada cliente com sua respectiva conta
          this.data.push(obj);
        });
      });
    });
  }

  abrirModalVerCliente(cliente: Cliente, conta: Conta) {
    const modalRef = this.modalService.open(ModalVerClienteComponent);
    modalRef.componentInstance.cliente = cliente;
    modalRef.componentInstance.conta = conta;
  }
}
