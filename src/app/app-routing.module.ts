import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { DataComponent } from './components/data/data.component';
import { HomeComponent } from './components/home/home.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { PopulationComponent } from './components/population/population.component';
import { CommunityComponent } from './components/community/community.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "population", component: PopulationComponent },
  { path: "analysis", component: AnalysisComponent },
  { path: "data", component: DataComponent },
  { path: "community", component: CommunityComponent },
  { path: "ref", component: ReferenceComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
