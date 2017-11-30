import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  colors: Array<number>;

  constructor() { }
  //ngOnInit happens when the component loads. Happens not much after the constructor.
  //Angular preference is to define stuff in ngOnInit instead of the constructor...
  ngOnInit() {
    this.title = "Barcode Assignment"
    let num = Math.floor(Math.random() * 10) + 5;
    this.colors = [];
    for(let i = 0; i < num; i++){
      this.colors.push(Math.floor(Math.random() * 6)+1);
    }
  }
}
