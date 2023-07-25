import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalComponent } from './journal.component';
import {EditJournalComponent} from './edit-journal/edit-journal.component';

const routes: Routes = [
  {
    path: 'view/:id',
    component: JournalComponent
  },
  {
    path: 'edit/:id',
    component: EditJournalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule { }
