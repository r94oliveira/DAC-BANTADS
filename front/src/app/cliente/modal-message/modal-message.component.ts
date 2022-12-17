import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent implements OnInit {
  @Input() Cliente!: Cliente;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
