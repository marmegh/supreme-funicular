import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// class mail {
//   email: string;
//   importance: string;
//   subject: string;
//   content: string;
//   constructor (email: string, level: number, sub: string, cont: string){
//     this.email = email;
//     this.subject = sub;
//     this.content = cont;
//     if(level > 5){
//       this.importance = "high";
//     }
//     else{
//       this.importance = "low";
//     }
//   }
// }
export class AppComponent {
  title = 'app';
}
