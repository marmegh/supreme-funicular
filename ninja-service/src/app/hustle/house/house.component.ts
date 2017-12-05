import { Component, OnInit } from '@angular/core';
import { NinjaService } from '../../ninja.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor(private _ninjaService: NinjaService) { }

  ngOnInit() {
  }

  homeWork(){
    this._ninjaService.house();
  }

}
