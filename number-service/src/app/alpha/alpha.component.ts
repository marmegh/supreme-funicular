import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

  adds: number[] = [];

  constructor(private _numberService: NumberService) { }

  ngOnInit() {
    this.adds = this._numberService.retrieveAdds();
  }
  genAlpha = function(){
    this._numberService.addAdds();
  }

}
