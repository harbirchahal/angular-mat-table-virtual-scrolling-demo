import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Person } from '../../models';

@Component({
  selector: 'people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent implements OnInit {
  @Input() set people(data: Person[]) {
    this.dataSource.data = data;
  }
  @Output() personSelected = new EventEmitter<Person>();

  readonly displayedColumns = ['id', 'firstname', 'lastname', 'email', 'phone'];
  readonly dataSource = new MatTableDataSource<Person>();

  constructor() { }

  ngOnInit() {
  }

}
