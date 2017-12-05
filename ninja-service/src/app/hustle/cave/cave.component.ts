import { Component, OnInit } from '@angular/core';
import { NinjaService } from '../../ninja.service';

@Component({
  selector: 'app-cave',
  templateUrl: './cave.component.html',
  styleUrls: ['./cave.component.css']
})
export class CaveComponent implements OnInit {

  constructor(private _ninjaService: NinjaService) { }

  ngOnInit() {
  }

  mineWork(){
    this._ninjaService.mine();
  }

}
