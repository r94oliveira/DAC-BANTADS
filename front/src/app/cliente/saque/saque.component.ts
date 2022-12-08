import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Transacao } from 'src/app/shared';
import { TransferenciaService } from '../transferencia';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.scss']
})
export class SaqueComponent implements OnInit {

  @ViewChild("formSacar") formSacar!: NgForm;
  transacao!: Transacao;

  constructor(
    // private clienteService: ClienteService,
    private transferenciaService: TransferenciaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.transacao = new Transacao();
  }

  //sacar do service transferencia -- tem que verificar se saldo é maior que valor
  sacar(): void {
    if (this.formSacar.form.valid) {
      this.transferenciaService.sacar(this.transacao.valorTransacao);
      this.router.navigate(['/cliente/home']);
    }
  }

}
