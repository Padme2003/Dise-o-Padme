import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Grid1Component } from './components/grid-1/grid-1.component';
import { Grid2Component } from './components/grid-2/grid-2.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './components/home/home.component';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { Deber4Component } from './components/deber-4/deber-4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { Deber5Component } from './components/deber-5/deber-5.component';


@NgModule({
  declarations: [
    AppComponent,
    Grid1Component,
    Grid2Component,
    CardsComponent,
    HomeComponent,
    Deber4Component,
    Deber5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule, 
    ButtonModule,
    ToolbarModule, 
    AvatarModule,
    FormsModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    CarouselModule,
    TagModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
