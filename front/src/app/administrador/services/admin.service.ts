import { Injectable } from '@angular/core';
import { GerenteDashDto } from '../dto/gerente-dash-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Conta, Gerente } from 'src/app/shared';
import { ClienteService } from 'src/app/cliente';
import { ClienteDashDto } from '../dto/cliente-dash-dto';
import { ContaService } from 'src/app/conta/services/conta.service';
import { GerenteService } from 'src/app/gerente/services';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private gerenteHost: string = 'http://localhost:3000/gerentes';

  constructor(
    private http: HttpClient,
    private clienteService: ClienteService,
    private contaService: ContaService,
    private gerenteService: GerenteService,
  ) { }

  gerarNumeroClientes (gerentes: Gerente[]): number {
    let totalContas = gerentes.reduce((partialSum, elem) => elem.numeroClientes! + partialSum, 0)

    if (gerentes == null || gerentes.length == 0)
      return 0

    else if (totalContas == 1)
      return 0

    else {
      let maxClientes = gerentes[0]

      for (let i = 1; i < gerentes.length; i++) {
        if (gerentes[i].numeroClientes! > maxClientes.numeroClientes!) {
          maxClientes = gerentes[i]
        }
      }

      maxClientes.numeroClientes! -= 1;

      this.gerenteService.alterar(maxClientes)

      return 1
    }
  }

  inserirGerente (gerente: Gerente): void {
    this.gerenteService.listarTodos().subscribe({
      next: data => {
        const gerentes = Object.values(data)

        const lastId = gerentes[gerentes.length - 1].id

        gerente.id = lastId + 1
        gerente.numeroClientes = this.gerarNumeroClientes(gerentes)

        this.http.post(this.gerenteHost, gerente).subscribe({
          next: data => {
            console.log('gerente inserido: ', data)
          },
          error: error => {
            console.error('error inserir gerente: ', error)
          }
        })
      },
      error (err) {
        console.log('error gerenteService.listarTodos()')
      }

    })

  }

  removerGerenteId(id: number): Observable<any> {
    return this.http.delete(`${this.gerenteHost}/${id}`)
  }

  listarGerentes (): Observable<GerenteDashDto[]> {
    let gerentesDtos: GerenteDashDto[] = []

    const res = of(gerentesDtos)

    this.gerenteService.listarTodos().subscribe(res => {
      let gerentes = Object.values(res)

      gerentes.forEach(gerente => {
        let totalClientes = 0;
        let totalSaldoPositivo = 0;
        let totalSaldoNegativo = 0;

        this.contaService.buscarPorIdGerente(gerente.id).subscribe(res => {
          totalClientes = res.length
          res.forEach(conta => conta.saldo < 0 ? totalSaldoNegativo -= conta.saldo : totalSaldoPositivo += conta.saldo)

          const dto = {
            gerente,
            totalClientes,
            totalSaldoNegativo,
            totalSaldoPositivo,
          }

          gerentesDtos.push(dto)
          gerentesDtos = gerentesDtos.sort((a,b) => a.gerente.nome!.localeCompare(b.gerente.nome!))
        })

      })
    })

    return res
  }

  listarClientes (): Observable<ClienteDashDto[]> {
    let res: ClienteDashDto[] = []
    const clienteObs = this.clienteService.listarTodos()
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
