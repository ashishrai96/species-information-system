import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavItemComponent } from './components/nav-bar/nav-item/nav-item.component';
import { HomeComponent } from './components/home/home.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { DataComponent } from './components/data/data.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { PopulationComponent } from './components/population/population.component';
import { CommunityComponent } from './components/community/community.component';

import {AccordionModule} from 'primeng/accordion';
import {ChartModule} from 'primeng/chart';
import {InputSwitchModule} from 'primeng/inputswitch';
import {EditorModule} from 'primeng/editor';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavItemComponent,
    HomeComponent,
    AnalysisComponent,
    DataComponent,
    ReferenceComponent,
    PopulationComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AccordionModule,
    ChartModule,
    InputSwitchModule,
    EditorModule,
    TabViewModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
