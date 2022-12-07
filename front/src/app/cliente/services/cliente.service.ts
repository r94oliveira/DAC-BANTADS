import { Injectable } from '@angular/core';
  import { Usuario } from 'src/app/shared';

const LS_CHAVE: string = "Usuarios";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  listarTodos(): Usuario[] {
    const usuarios = localStorage[LS_CHAVE];
    return usuarios ? JSON.parse(usuarios) : [];
  }

  inserir(usuario: Usuario) : void {
    const usuarios = this.listarTodos();
    usuario.id = new Date().getTime(); 
    usuarios.push(usuario);
    localStorage[LS_CHAVE] = JSON.stringify(usuarios);
  }

  buscarPorId(id: number): Usuario | undefined {
    const usuarios: Usuario[] = this.listarTodos();
    return usuarios.find( usuario => usuario.id === id );
  }

  alterar(usuario: Usuario): void {
    const usuarios: Usuario[] = this.listarTodos();

    usuarios.forEach(
      (obj, index, objs) => {
        if(usuario.id === obj.id){
          objs[index] = usuario;
        }
      }
    );
    localStorage[LS_CHAVE] = JSON.stringify(usuarios);
  }

  remover(id: number): void {
    let usuarios: Usuario[] = this.listarTodos();

    usuarios = usuarios.filter( usuario => usuario.id !== id );
    localStorage[LS_CHAVE] = JSON.stringify(usuarios);
  }

  depositar(usuario: Usuario): void {
    console.log("depositar")
  }
}

