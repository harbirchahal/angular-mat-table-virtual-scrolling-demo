import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Person } from '../../models';

@Component({
  selector: 'people-viewport',
  templateUrl: './people-viewport.component.html',
  styleUrls: ['./people-viewport.component.css']
})
export class PeopleViewportComponent implements OnInit {
  @Input() people: Person[] = [];
  @Output() personSelected = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

}
