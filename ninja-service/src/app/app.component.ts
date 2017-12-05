import { Component, OnInit } from '@angular/core';
import { NinjaService } from './ninja.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  getGold(){
    return this._ninjaService.gold;
  };

  constructor(private _ninjaService: NinjaService) 
  {
  }
}
