import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { IdComponent } from './id/id.component';
import { IdListComponent } from './id/id-list/id-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    IdComponent,
    IdListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
