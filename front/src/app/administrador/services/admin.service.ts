import { Injectable } from '@angular/core';
import { GerenteDashDto } from '../dto/gerente-dash-dto';
import { Cliente } from '../entities/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private endpoint: string = 'http://localhost:3000/admin';

  constructor(private http: HttpClient) {}

  listarGerentes (): Observable<GerenteDashDto[]> {
    return this.http.get<GerenteDashDto[]>(`${this.endpoint}-dash`)
  }

  listarClientes (): Cliente[] {
    return [] // ordernado ascendente pelo nome
  }

}
