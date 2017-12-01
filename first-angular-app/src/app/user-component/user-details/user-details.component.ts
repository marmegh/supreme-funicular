import { Component, OnInit, Input } from '@angular/core';
import {User} from './../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  //expect to pass in from parent class
  @Input() some_user: User

  constructor() { }

  ngOnInit() {
    // this.some_user = {first_name: "Hank", last_name: "Jeffords", email:"h@j.c", important: true}
  }

}
