import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearcherListComponent } from './researcher-list.component';

const routes: Routes = [{ path: '', component: ResearcherListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearcherListRoutingModule { }
