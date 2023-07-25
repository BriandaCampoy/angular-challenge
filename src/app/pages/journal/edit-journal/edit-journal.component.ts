import { Component, inject } from '@angular/core';
import { Journal } from 'src/app/interfaces/journal';
import { JournalService } from 'src/app/services/journal.service';
import { ActivatedRoute } from '@angular/router';
import { FormActions } from 'src/app/interfaces/formActions';
import { Router } from '@angular/router';
import { LoggedUserService } from 'src/app/services/logged-user.service';

/**
 * EditJournalComponent is a component responsible for editing a journal entry.
 */
@Component({
  selector: 'app-edit-journal',
  templateUrl: './edit-journal.component.html',
})
export class EditJournalComponent {
  /**
   * Creates an instance of EditJournalComponent.
   * @param journalService - The JournalService instance injected via dependency injection.
   * @param route - The ActivatedRoute instance injected via dependency injection.
   * @param router - The Router instance injected via dependency injection.
   */
  constructor(
    private journalService: JournalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const journalId = this.route.snapshot.params['id'];
    this.journalService.getJournalById(journalId).subscribe((journal) => {
      this.journal = journal;
    });
  }

  /**
   * The journal object to be edited.
   */
  journal: Journal = {
    title: '',
    journalId: '',
    researcherId: '',
    publishedDate: new Date(),
    url: '',
  };

  /**
   * The form action indicating whether it's for updating a journal entry.
   */
  formAction: FormActions = FormActions.update;

  /**
   * The loggedUserService instance injected via dependency injection.
   */
  loggedUserService = inject(LoggedUserService);

  /**
   * Submits the updated journal information to the server.
   * @param journal - The updated journal object.
   * @param journalFile - The updated journal file (if any).
   */
  onSumbit(journal: Journal, journalFile: File | undefined) {
    this.journalService
      .updateJournal(journal, journalFile)
      .subscribe((res) =>
        this.router.navigate([
          `/researcher/profile/${this.loggedUserService.loggedUser.researcherId}`,
        ])
      );
  }
}
