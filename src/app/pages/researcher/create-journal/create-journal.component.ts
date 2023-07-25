import { Component, inject } from '@angular/core';
import { Journal } from 'src/app/interfaces/journal';
import { JournalService } from 'src/app/services/journal.service';
import { Router } from '@angular/router';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { FormActions } from 'src/app/interfaces/formActions';

/**
 * CreateJournalComponent is a component used for creating a new journal entry.
 */
@Component({
  selector: 'app-create-journal',
  templateUrl: './create-journal.component.html',
})
export class CreateJournalComponent {
  /**
   * The LoggedUserService instance injected via dependency injection.
   */
  loggedUserService = inject(LoggedUserService);

  /**
   * The form action to perform, either 'upload' or 'update'.
   */
  formAction: FormActions = FormActions.upload;

  /**
   * Creates an instance of CreateJournalComponent.
   * @param journalService - The JournalService instance injected via dependency injection.
   * @param router - The Router instance injected via dependency injection.
   */
  constructor(private journalService: JournalService, private router: Router) {}

  /**
   * Handles the form submission for creating a new journal entry.
   * @param journal - The journal entry to be created.
   * @param journalFile - The file attached to the journal entry (optional).
   */
  onSumbit(journal: Journal, journalFile: File) {
    this.journalService
      .uploadJournal(journal, journalFile)
      .subscribe((res) =>
        this.router.navigate([
          `/researcher/profile/${this.loggedUserService.loggedUser.researcherId}`,
        ])
      );
  }
}
