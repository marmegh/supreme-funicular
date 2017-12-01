import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { UserDetailsComponent } from './user-component/user-details/user-details.component';
import { UserCreateComponent } from './user-component/user-create/user-create.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    UserDetailsComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
