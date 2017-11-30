import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  buttons: Array<boolean>;
  constructor(){}
  ngOnInit() {
    this.title = "Switchboard Assignment";
    this.buttons = [true,true,true,true,true,true,true,true,true,true];
    console.log(this.buttons)
  }
  button_function(idx: number){
    if(this.buttons[idx])
    {
      this.buttons[idx] = false;
    }
    else{
      this.buttons[idx] = true;
    }
  }
}
