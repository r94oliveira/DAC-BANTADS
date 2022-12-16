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
  data: Array<any> = new Array();

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
            cpf: cliente.cpf,
            nome: cliente.nome,
            estado: cliente.estado,
            cidade: cliente.cidade,
            saldo: conta.saldo,
          };

          // o array data serve para mostrar
          // linha a linha cada cliente com sua respectiva conta
          this.data.push(obj);
          this.data.sort((a, b) => b.saldo - a.saldo);
          this.data = this.data.slice(0, 5);
        });
      });
    });
  }
}
