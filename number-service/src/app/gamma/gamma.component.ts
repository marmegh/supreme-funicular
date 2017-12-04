import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {

  diff : number = null;

  constructor(private _numberService: NumberService) { }

  ngOnInit() {
  }

  calc = function(){
    this.diff = this._numberService.calcDiff();
  }

}
