import { Injectable } from '@angular/core';
import { GerenteDashDto } from '../dto/gerente-dash-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Conta, Gerente, Usuario } from 'src/app/shared';
import { ClienteService } from 'src/app/cliente';
import { ClienteDashDto } from '../dto/cliente-dash-dto';
import { ContaService } from 'src/app/conta/services/conta.service';
import { GerenteService } from 'src/app/gerente/services';
import { of, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private gerenteHost: string = 'http://localhost:3000/gerentes';
  private userHost: string = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
    private clienteService: ClienteService,
    private contaService: ContaService,
    private gerenteService: GerenteService
  ) { }

  inserirGerente (gerente: Gerente): void {
    this.gerenteService.listarTodos().subscribe({
      next: data => {
        const gerentes = Object.values(data)

        gerente.numeroClientes = 0

        let usuario: Usuario = {
          cargo: 'GERENTE',
          email: gerente.email,
          nome: gerente.nome,
          senha: gerente.senha
        }

        this.http.post('http://localhost:3000/users', usuario).subscribe(() => {
          this.http.post(this.gerenteHost, gerente).subscribe({
            next: data => {
              console.log('gerente inserido: ', data)
              window.location.replace('/admin')
            },
            error: error => {
              console.error('error inserir gerente: ', error)
            }
          })
        })

      },
      error (err) {
        console.log('error gerenteService.listarTodos()')
      }

    })

  }

  removerGerente (gerente: Gerente): void {
    const { id, email } = gerente

    this.http.delete(`${this.gerenteHost}/${id}`).subscribe(data => {
      this.http.get<Usuario[]>(this.userHost).subscribe(users => {
        const user = users.find(user => user.cargo === 'GERENTE' && user.email === email)
        if (user) {
          this.http.delete(`${this.userHost}/${user.id}`).subscribe(() => {
            window.location.replace('/admin')
          })
        }
      })
    })
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
          gerentesDtos = gerentesDtos.sort((a, b) => a.gerente.nome!.localeCompare(b.gerente.nome!))
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
