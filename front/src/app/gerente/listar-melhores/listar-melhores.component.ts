import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { ContaService } from 'src/app/conta/services/conta.service';
import { Cliente, Conta } from 'src/app/shared';

@Component({
  selector: 'app-listar-melhores',
  templateUrl: './listar-melhores.component.html',
  styleUrls: ['./listar-melhores.component.scss'],
})
export class ListarMelhoresComponent implements OnInit {
  data: any = [];

  constructor(
    private clienteService: ClienteService,
    private contaService: ContaService
  ) {}

  ngOnInit(): void {
    this.clienteService.listarTodos().subscribe((clientes) => {
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

      // o sort não funciona porque o data é do tipo any e não array, tem que arrumar
      this.data.sort(
        (
          a: { cliente: Cliente; conta: Conta },
          b: { cliente: Cliente; conta: Conta }
        ) =>
          a.conta.saldo > b.conta.saldo
            ? 1
            : b.conta.saldo > a.conta.saldo
            ? -1
            : 0
      );

      console.log(this.data);
    });
  }
}
