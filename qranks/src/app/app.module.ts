import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { QlistComponent } from './qlist/qlist.component';
import { QgenComponent } from './qgen/qgen.component';


@NgModule({
  declarations: [
    AppComponent,
    QlistComponent,
    QgenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
