import { Injectable } from '@angular/core';

@Injectable()
export class NumberService {
  adds: number[] = [];
  subs: number[]  = [];
  diff: number;

  constructor() { }
  retrieveAdds(): number[]{
    return this.adds;
  }
  retrieveSubs(): number[]{
    return this.subs;
  }
  addAdds(){
    this.adds.push(Math.ceil(Math.random()*9));
  }
  addSubs(){
    this.subs.push(Math.ceil(Math.random()*9));
  }
  sumAdds(): number{
    let total = 0;
    for(let i = 0; i < this.adds.length; i++){
      total += this.adds[i];
    }
    return total;
  }
  sumSubs(): number{
    let total = 0;
    for(let i = 0; i < this.subs.length; i++){
      total += this.subs[i];
    }
    return total;
  }
  calcDiff(): number{
    return this.sumAdds()-this.sumSubs();
  }
}
