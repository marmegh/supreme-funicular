import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from './../quote';

@Component({
  selector: 'app-qlist',
  templateUrl: './qlist.component.html',
  styleUrls: ['./qlist.component.css']
})
export class QlistComponent implements OnInit {
  @Input() some_quote: Quote
  @Output() up_event = new EventEmitter;
  @Output() down_event = new EventEmitter;
  @Output() delete_event = new EventEmitter;


  constructor() { }

  ngOnInit() {
  }

  upVote(){
    this.up_event.emit(this.some_quote);
  }
  downVote(){
    this.down_event.emit(this.some_quote);
  }
  delete(){
    this.delete_event.emit(this.some_quote);
  }

}

// <button class = "up" (click)="upVote()">Vote Up</button>
// <button class = "down" (click)="downVote()">Vote Down</button>
// <button class = "delete" (click)="delete()">Delete</button>