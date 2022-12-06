import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Details } from '../id';

@Component({
  selector: 'helo-id-list',
  templateUrl: './id-list.component.html',
  styleUrls: ['./id-list.component.css']
})
export class IdListComponent {
  @Input() id: Details[] = [];
  
  @Output() idSelected = new EventEmitter<Details>();

  selectPatient(Ids: Details)
  {
    this.idSelected.emit(Ids);
  }

}
