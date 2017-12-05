import { Component, OnInit } from '@angular/core';
import { NinjaService } from '../ninja.service';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent {
  gold(){};

  constructor(private _ninjaService: NinjaService) {
    this.gold = this._ninjaService.retrieveGold;
   }

}
