import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Journal } from 'src/app/interfaces/journal';
import { JournalService } from 'src/app/services/journal.service';
import { ResearcherService } from 'src/app/services/researcher.service';
import { Researcher } from 'src/app/interfaces/researcher';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { ConfirmationModalComponent } from 'src/app/components/confirmation-modal/confirmation-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * JournalComponent is a component that displays a single journal entry.
 */
@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
})
export class JournalComponent {
  /**
   * Creates an instance of JournalComponent.
   * @param journalService - The JournalService instance injected via dependency injection.
   * @param researcherService - The ResearcherService instance injected via dependency injection.
   * @param route - The ActivatedRoute instance injected via dependency injection.
   * @param modalService - The NgbModal instance injected via dependency injection.
   * @param router - The Router instance injected via dependency injection.
   */
  constructor(
    private journalService: JournalService,
    private researcherService: ResearcherService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.journalId = this.route.snapshot.params['id'];
    this.journalService.getJournalById(this.journalId).subscribe((journal) => {
      this.journal = journal;
      this.researcherService
        .getResearcher(journal.researcherId)
        .subscribe((researcher) => {
          this.researcher = researcher;
        });
    });
  }

  /**
   * The ID of the journal entry to display.
   */
  journalId: string;

  /**
   * The researcher who authored the journal entry.
   */
  researcher: Researcher = {
    researcherId: '',
    name: '',
    email: '',
  };

  /**
   * The journal entry to be displayed.
   */
  journal: Journal = {
    researcherId: '',
    title: '',
    publishedDate: new Date(),
    journalId: '',
    url: '',
  };

  /**
   * The LoggedUserService instance injected via dependency injection.
   */
  loggedUserService: LoggedUserService = inject(LoggedUserService);

  /**
   * Opens the confirmation modal when the user wants to delete the journal entry.
   */
  openConfirmationModal() {
    const modalRef = this.modalService.open(ConfirmationModalComponent, {
      centered: true,
    });

    modalRef.componentInstance.title = 'Are you sure?';
    modalRef.componentInstance.message = 'you want to delete this journal?';
    modalRef.componentInstance.result = false;

    modalRef.componentInstance.confirmed.subscribe((receivedEntry: boolean) => {
      if (receivedEntry) {
        this.journalService
          .deleteJournal(this.journalId)
          .subscribe((res) =>
            this.router.navigate([
              `/researcher/profile/${this.loggedUserService.loggedUser.researcherId}`,
            ])
          );
      }
    });
  }
}
