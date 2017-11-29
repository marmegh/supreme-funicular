import { Component, OnInit } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  my_name:string
  other_names: Array<User>//string[] // or Array<string>
  constructor() { }
  //ngOnInit happens when the component loads. Happens not much after the constructor.
  //Angular preference is to define stuff in ngOnInit instead of the constructor...
  ngOnInit() {
    this.my_name = "Mary";
    this.other_names = [{
      first_name: "Lizzie",
      last_name: "G.",
      important: true,
      email: "Lizzie@g.com",
    }];
  }

}
