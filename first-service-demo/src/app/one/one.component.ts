import { Component, OnInit } from '@angular/core';
//import the service
import { DataService } from '../data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  numbers: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbers = this._dataService.retrieveNumbers();
  }

}
