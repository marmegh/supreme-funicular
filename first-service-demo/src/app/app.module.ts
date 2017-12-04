import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
//imort the service
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule
  ],
  //name the service as a provider
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
