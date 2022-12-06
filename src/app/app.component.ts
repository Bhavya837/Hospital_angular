import { Component } from '@angular/core';

@Component({
  selector: 'helo-root',
  templateUrl: './app.component.html',
  //template: `<h1>Hello World from inline template</h1>
  //<p>Angular is awesome</p>
  //`,
   styleUrls: ['./app.component.css'],
  //styles:[`h1{color: red;}`]
})
export class AppComponent {
  title = 'helloo';

  role ='Admin';
}
