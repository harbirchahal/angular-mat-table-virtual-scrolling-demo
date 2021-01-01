import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListRange } from '@angular/cdk/collections';

import { Person } from '../../models';

@Component({
  selector: 'people-viewport',
  templateUrl: './people-viewport.component.html',
  styleUrls: ['./people-viewport.component.css']
})
export class PeopleViewportComponent implements OnInit {
  @Input() people: Person[] = [];
  @Output() personSelected = new EventEmitter<Person>();

  peopleSlice:  Person[] = [];

  constructor() { }

  ngOnInit() {
  }

  updatePeopleSlice(range: ListRange) {
    this.peopleSlice = this.people.slice(range.start, range.end);
  }

}
