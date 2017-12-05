import { Component, OnInit } from '@angular/core';
import { NinjaService } from '../ninja.service';

@Component({
  selector: 'app-hx',
  templateUrl: './hx.component.html',
  styleUrls: ['./hx.component.css']
})
export class HxComponent implements OnInit {
  hx: string[];

  constructor(private _ninjaService: NinjaService) { }

  ngOnInit() {
    this.hx = this._ninjaService.retrieveHx();
  }

}
