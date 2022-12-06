import { Component } from '@angular/core';
import { Ids, Details } from './id';
@Component({
  selector: 'helo-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent {

  hospitalName = 'abc hospital';

  patientName = "ravi";
  age = "25";
  hideDetails = false;

 


  id: Ids = {
    oldPatient: true,
  };

  details: Details[] = [{
    patId : '55',
    weight : 69,
    problem: 'fever',
    phonenum: '9988776655',
    date: new Date('01-Dec-2022'),
    fee: 200,
  },
  {
    patId : '56',
    weight : 70,
    problem : 'cough',
    phonenum : '9911227845',
    date : new Date('02-Dec-2022'),
    fee : 200,
  },
  {
    patId :'57',
    weight : 55,
    problem : 'vomitings',
    phonenum : '9911233333',
    date : new Date('02-Dec-2022'),
    fee : 200,

  }
];

  hide() {
    this.hideDetails = !this.hideDetails;
  }

  idSelected(Ids: Details)
  {
    console.log(Ids);
  }
}



