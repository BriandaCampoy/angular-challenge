import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResearcherListRoutingModule } from './researcher-list-routing.module';
import { ResearcherListComponent } from './researcher-list.component';
import { ResearcherCardComponent } from './researcher-card/researcher-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ResearcherListComponent,
    ResearcherCardComponent,
  ],
  imports: [
    CommonModule,
    ResearcherListRoutingModule,
    SharedModule
  ]
})
export class ResearcherListModule { }
