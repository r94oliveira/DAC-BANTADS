import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Usuario, Login } from 'src/app/shared';

const LS_CHAVE: string = 'usuarioLogado';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  public get usuarioLogado(): Usuario {
    let usu = localStorage[LS_CHAVE];
    return usu ? JSON.parse(localStorage[LS_CHAVE]) : null;
  }

  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }

  login(login: Login) {
    return this.http.get(this.url).pipe(tap((res) => res));
  }
}
