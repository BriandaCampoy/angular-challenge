import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { JournalRoutingModule } from './journal-routing.module';
import { JournalComponent } from './journal.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { EditJournalComponent } from './edit-journal/edit-journal.component';


@NgModule({
  declarations: [
    JournalComponent,
    EditJournalComponent
  ],
  imports: [
    CommonModule,
    JournalRoutingModule,
    PdfViewerModule,
    SharedModule
  ]
})
export class JournalModule { }
