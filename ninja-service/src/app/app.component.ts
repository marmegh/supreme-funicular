import { Component, OnInit } from '@angular/core';
import { NinjaService } from './ninja.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  getGold(){};

  constructor(private _ninjaService: NinjaService) 
  {
    this.getGold = _ninjaService.retrieveGold;
  }
}
