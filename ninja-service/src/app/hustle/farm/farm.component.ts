import { Component, OnInit } from '@angular/core';
import { NinjaService } from '../../ninja.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  constructor(private _ninjaService: NinjaService) { }

  ngOnInit() {
  }

  farmWork(){
    this._ninjaService.farm();
  }
  
}
