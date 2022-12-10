import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, take, tap } from 'rxjs';
import { Cliente } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private url: string = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) {}

  listarTodos() {
    return this.http
      .get<Cliente[]>(this.url)
      .pipe(delay(2000), tap(console.log));
  }

  buscarPorId(id: number) {
    return this.http.get<Cliente>(`${this.url}/${id}`).pipe(take(1));
  }

  inserir(cliente: Cliente) {
    return this.http.post(this.url, cliente).pipe(take(1));
  }

  alterar(cliente: Cliente) {
    return this.http.put(`${this.url}/${cliente['id']}`, cliente).pipe(take(1));
  }

  remover(id: number) {
    return this.http.delete(`${this.url}/${id}`).pipe(take(1));
  }

  depositar(cliente: Cliente): void {
    console.log('depositar');
  }
}
