import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Quote} from './../quote';

@Component({
  selector: 'app-qgen',
  templateUrl: './qgen.component.html',
  styleUrls: ['./qgen.component.css']
})
export class QgenComponent implements OnInit {
  new_quote: Quote;
  @Output() create_event = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  create_quote(){
    this.create_event.emit(this.new_quote)
  }

}
