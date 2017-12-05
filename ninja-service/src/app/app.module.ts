import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NinjaService } from './ninja.service';
import { AppComponent } from './app.component';
import { HustleComponent } from './hustle/hustle.component';
import { HxComponent } from './hx/hx.component';
import { FarmComponent } from './hustle/farm/farm.component';
import { CaveComponent } from './hustle/cave/cave.component';
import { CasinoComponent } from './hustle/casino/casino.component';
import { HouseComponent } from './hustle/house/house.component';
import { GoldComponent } from './gold/gold.component';


@NgModule({
  declarations: [
    AppComponent,
    HustleComponent,
    HxComponent,
    FarmComponent,
    CaveComponent,
    CasinoComponent,
    HouseComponent,
    GoldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NinjaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
