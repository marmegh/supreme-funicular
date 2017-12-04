import { Component, OnInit } from '@angular/core';
import {Character} from './character';
import {SwapiService} from "./swapi.service";

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.css']
})
export class SwapiComponent implements OnInit {
  this_character: Character
  char_id: number

  constructor(private swapi_service: SwapiService) { }

  ngOnInit() {
    this.this_character = new Character();
    this.swapi_service.get_character(3)
      .then( (data : Character) => this.this_character = data);
  }
  get_new_character(){
    this.swapi_service.get_character(this.char_id)
      .then( (data : Character) => this.this_character = data);
  }

}
