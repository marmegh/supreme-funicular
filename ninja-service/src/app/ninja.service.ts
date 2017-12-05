import { Injectable } from '@angular/core';

@Injectable()
export class NinjaService {
  public gold: number = 0;
  hx: string[] = [];

  constructor() { }
  retrieveGold(): string{
    return this.gold.toString();
  }
  retrieveHx(): string[]{
    return this.hx;
  }
  gamble(){
    if(this.gold < 100)
    {
      this.hx.push("Didn't have enough gold to place a bet.");
    }
    else{
      let stakes = Math.ceil(Math.random()*100);
      if(Math.random() < .5)
      {
        this.gold -= stakes;
        this.hx.push("Gambled and won " + stakes + " gold.");
      }else{
        this.gold -= stakes;
        this.hx.push("Gambled and lost " + stakes + " gold.");
      }
    }
  }
  farm(){
    let money = Math.ceil(Math.random()*3) + 2;
    this.gold += money;
    this.hx.push("Toiled on the farm and earned " + money + " gold.");
    console.log(this.gold);
  }
  mine(){
    let money = Math.ceil(Math.random()*5) + 5;
    this.gold += money;
    this.hx.push("Toiled the mines and earned " + money + " gold.");
    console.log(this.gold);
  }
  house(){
    let money = Math.ceil(Math.random()*8) + 7;
    this.gold += money;
    this.hx.push("Worked from home and made " + money + " gold.");
    console.log(this.gold);
  }

}
