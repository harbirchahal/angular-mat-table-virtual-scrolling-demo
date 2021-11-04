import { Component } from '@angular/core';

import { DATA } from './data';
import { Person } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly people: Person[] = DATA;

  doSomething(person: Person) {
    console.log('Selected person: ', person);
  }
}
