import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  consts = [
    {
      title: 'Rent',
      amount: 760
    }
  ]
  title = 'my-budget';


}
