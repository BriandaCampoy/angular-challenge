import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResearcherEditRoutingModule } from './researcher-edit-routing.module';
import { ResearcherEditComponent } from './researcher-edit.component';


@NgModule({
  declarations: [
    ResearcherEditComponent
  ],
  imports: [
    CommonModule,
    ResearcherEditRoutingModule,
    FormsModule
  ]
})
export class ResearcherEditModule { }
