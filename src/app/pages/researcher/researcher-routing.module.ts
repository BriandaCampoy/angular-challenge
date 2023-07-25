import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearcherComponent } from './researcher.component';
import { CreateJournalComponent } from './create-journal/create-journal.component';

const routes: Routes = [
  {
    path: 'profile/:id',
    component: ResearcherComponent
  },
  {
    path: 'journalupload',
    component: CreateJournalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearcherRoutingModule { }
