import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {User} from './../user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  new_user: User;
  @Output() create_event = new EventEmitter;

  constructor() { }

  ngOnInit() {
    this.new_user = new User;
  }
  create_user(){
    this.create_event.emit(this.new_user)
  }

}
