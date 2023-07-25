import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormaterPipe } from '../pipes/date-formater.pipe';
import { FeedComponent } from '../components/feed/feed.component';
import { FeedItemComponent } from '../components/feed-item/feed-item.component';
import { RouterModule } from '@angular/router';
import { JournalFormComponent } from '../components/journal-form/journal-form.component';
import { FormsModule } from '@angular/forms';
import { ConfirmationModalComponent } from '../components/confirmation-modal/confirmation-modal.component';
import { FollowBtnComponent } from '../components/follow-btn/follow-btn.component';

@NgModule({
  declarations: [
    DateFormaterPipe,
    FeedComponent,
    FeedItemComponent,
    JournalFormComponent,
    ConfirmationModalComponent,
    FollowBtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    DateFormaterPipe,
    FeedComponent,
    FeedItemComponent,
    RouterModule,
    JournalFormComponent,
    ConfirmationModalComponent,
    FollowBtnComponent
  ]
})
export class SharedModule { }
