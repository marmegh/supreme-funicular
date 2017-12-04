import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  public subs: number[] = [];

  constructor(private _numberService: NumberService) { }

  ngOnInit() {
    this.subs = this._numberService.retrieveSubs();
    console.log(this.subs);
  }

  genBeta = function(){
    this._numberService.addSubs();
  }

}
