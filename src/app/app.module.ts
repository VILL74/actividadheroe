import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewHeroeComponent } from './new-heroe/new-heroe.component';
import { EditHeroeComponent } from './edit-heroe/edit-heroe.component';
import { HeroeComponent } from './heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NewHeroeComponent,
    EditHeroeComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
