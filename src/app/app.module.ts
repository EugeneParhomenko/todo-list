import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { AddComponent } from './list/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ListComponent,
    ItemComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
