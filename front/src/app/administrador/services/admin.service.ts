import { Injectable } from '@angular/core';
import { GerenteDashDto } from '../dto/gerente-dash-dto';
import { Cliente } from '../entities/Cliente';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  listarGerentes (): GerenteDashDto[] {
    return []
  }

  listarClientes (): Cliente[] {
    return [] // ordernado ascendente pelo nome
  }

}
