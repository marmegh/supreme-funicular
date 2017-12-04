import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ NumberService } from './number.service';
import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './gamma/gamma.component';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    GammaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
