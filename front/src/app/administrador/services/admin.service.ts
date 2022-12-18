import { Injectable } from '@angular/core';
import { GerenteDashDto } from '../dto/gerente-dash-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Conta } from 'src/app/shared';
import { ClienteService } from 'src/app/cliente';
import { ClienteDashDto } from '../dto/cliente-dash-dto';
import { ContaService } from 'src/app/conta/services/conta.service';
import { GerenteService } from 'src/app/gerente/services';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminHost: string = 'http://localhost:3000/admin';

  constructor(
    private http: HttpClient,
    private clienteService: ClienteService,
    private contaService: ContaService,
    private gerenteService: GerenteService,
  ) { }

  listarGerentes (): Observable<GerenteDashDto[]> {
    return this.http.get<GerenteDashDto[]>(`${this.adminHost}-dash`)
  }

  listarClientes (): Observable<ClienteDashDto[]> {
    let res: ClienteDashDto[] = []
    const clienteObs = this.clienteService.listarTodos();
    let objservableClienteDash = of(res)

    clienteObs
      .subscribe(clientes => {
        clientes.forEach(cliente => {
          this.contaService.buscarPorIdCliente(cliente.id).subscribe(contaRes => {
            const conta: Conta = Object.values(contaRes).reduce(value => value)
            this.gerenteService.buscarPorId(conta.idGerente).subscribe(gerente => {
              const clienteDash: ClienteDashDto = {
                id: cliente.id,
                nome: cliente.nome,
                cpf: cliente.cpf,
                limite: conta.limite,
                saldo: conta.saldo,
                gerente: gerente.nome
              }

              res.push(clienteDash)
            })
          })
        })
      })

    return objservableClienteDash
  }

}
