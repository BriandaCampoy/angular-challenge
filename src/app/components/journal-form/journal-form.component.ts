import { Component, Input, inject } from '@angular/core';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Journal } from 'src/app/interfaces/journal';
import { JournalService } from 'src/app/services/journal.service';
import { Router } from '@angular/router';
import { FormActions } from 'src/app/interfaces/formActions';

/**
 * JournalFormComponent is a reusable component that represents a form for uploading or updating a journal.
 */
@Component({
  selector: 'app-journal-form',
  templateUrl: './journal-form.component.html',
})
export class JournalFormComponent {
  /**
   * Creates an instance of JournalFormComponent.
   * @param journalService - The JournalService instance injected via dependency injection.
   * @param router - The Router instance injected via dependency injection.
   */
  constructor(private journalService: JournalService, private router: Router) {}

  /**
   * The instance of LoggedUserService injected via dependency injection.
   */
  loggedUserService = inject(LoggedUserService);
  /**
   * The form action that determines whether to upload or update the journal.
   */
  @Input() formAction!: FormActions;
  /**
   * The function to be executed when the form is submitted.
   */
  @Input() submitAction!: Function;
  /**
   * The journal object to be uploaded or updated.
   */
  @Input() journal: Journal = {
    journalId: '',
    researcherId: this.loggedUserService.loggedUser.researcherId,
    title: '',
    url: '',
    publishedDate: new Date(),
  };
  /**
   * The selected journal file.
   */
  journalFile: File | undefined;
  /**
   * A flag indicating whether to keep the original journal file.
   */
  keepOriginal: boolean = false;

  /**
   * Event handler for the file input. Updates the journalFile property with the selected file.
   * @param event - The file input event.
   */
  onFileSelected(event: any) {
    this.journalFile = event.target.files[0] || null;
  }

  /**
   * Event handler for the form submission. Invokes the submitAction function with the journal and journalFile as arguments.
   */
  handleSubmit() {
    if (this.keepOriginal) {
      this.journalFile = undefined;
    }
    this.submitAction(this.journal, this.journalFile);
  }

  /**
   * Available form actions.
   */
  Actions: string[] = ['Upload Journal', 'Update Journal'];
}
