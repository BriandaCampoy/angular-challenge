import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ResearcherRoutingModule } from './researcher-routing.module';
import { ResearcherComponent } from './researcher.component';
import { CreateJournalComponent } from './create-journal/create-journal.component';

@NgModule({
  declarations: [
    ResearcherComponent,
    CreateJournalComponent,
  ],
  imports: [
    CommonModule,
    ResearcherRoutingModule,
    SharedModule
  ]
})
export class ResearcherModule { }
