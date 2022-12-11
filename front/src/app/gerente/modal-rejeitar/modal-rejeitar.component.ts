import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/shared';

@Component({
  selector: 'app-modal-rejeitar',
  templateUrl: './modal-rejeitar.component.html',
  styleUrls: ['./modal-rejeitar.component.scss'],
})
export class ModalRejeitarComponent implements OnInit {
  @Input() cliente!: Cliente;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  rejeitar() {}
}
