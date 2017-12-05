import { Component, OnInit } from '@angular/core';
import { NinjaService } from '../../ninja.service';

@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.css']
})
export class CasinoComponent implements OnInit {

  constructor(private _ninjaService: NinjaService) { }

  ngOnInit() {
  }

  gamble(){
    this._ninjaService.gamble();
  }

}
