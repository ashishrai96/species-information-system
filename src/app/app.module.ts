import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavItemComponent } from './components/nav-bar/nav-item/nav-item.component';
import { HomeComponent } from './components/home/home.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { DataComponent } from './components/data/data.component';
import { ReferenceComponent } from './components/reference/reference.component';

import {AccordionModule} from 'primeng/accordion';
import {ChartModule} from 'primeng/chart';
import {InputSwitchModule} from 'primeng/inputswitch';
import { PopulationComponent } from './components/population/population.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavItemComponent,
    HomeComponent,
    AnalysisComponent,
    DataComponent,
    ReferenceComponent,
    PopulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    ChartModule,
    InputSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
