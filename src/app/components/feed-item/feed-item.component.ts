import { Component, Input } from '@angular/core';
import { Journal } from 'src/app/interfaces/journal';
import { ResearcherService } from 'src/app/services/researcher.service';
import { Router } from '@angular/router';

/**
 * FeedItemComponent displays a single journal item in the feed.
 * It takes a Journal object as input to display its details in the feed item.
 */
@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
})
export class FeedItemComponent {
  /**
   * The Journal object to be displayed in the feed item.
   */
  @Input() journal!: Journal;

  /**
   * The author name of the journal.
   */
  author!: string;

  /**
   * Creates an instance of FeedItemComponent.
   * @param researcherService - The ResearcherService instance injected via dependency injection.
   * @param router - The Router instance injected via dependency injection.
   */
  constructor(
    private researcherService: ResearcherService,
    private router: Router
  ) {}

  /**
   * Handles the action when the user wants to view the journal details.
   * Navigates to the 'journal/view' route with the journalId as a parameter.
   */
  handleViewJournal() {
    this.router.navigate(['journal/view', this.journal.journalId]);
  }

  /**
   * Lifecycle hook that is called after the component is initialized.
   * Fetches the author name of the journal using the ResearcherService.
   */
  ngOnInit() {
    this.researcherService
      .getResearcher(this.journal.researcherId)
      .subscribe((researcher) => {
        this.author = researcher.name;
      });
  }
}
