import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Researcher } from 'src/app/interfaces/researcher';
import { ResearcherService } from 'src/app/services/researcher.service';
import { JournalService } from 'src/app/services/journal.service';
import { Journal } from 'src/app/interfaces/journal';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-researcher',
  templateUrl: './researcher.component.html',
})

/**
 * ResearcherComponent is a component used for displaying researcher information and associated journal items.
 */
export class ResearcherComponent {
  /**
   * The ActivatedRoute instance injected via dependency injection.
   */
  route: ActivatedRoute = inject(ActivatedRoute);

  /**
   * The Router instance injected via dependency injection.
   */
  router: Router = inject(Router);

  /**
   * The researcher whose information is being displayed.
   */
  researcher!: Researcher;

  /**
   * The list of journal items associated with the researcher.
   */
  journalItems: Journal[] = [];

  /**
   * The LoggedUserService instance injected via dependency injection.
   */
  loggedUserService: LoggedUserService = inject(LoggedUserService);

  /**
   * Creates an instance of ResearcherComponent.
   * @param researcherService - The ResearcherService instance injected via dependency injection.
   * @param journalService - The JournalService instance injected via dependency injection.
   */
  constructor(
    private researcherService: ResearcherService,
    private journalService: JournalService
  ) {
    this.chargeResearcherInfo();
  }

  /**
   * Initializes the component and subscribes to router events to reload researcher information on navigation changes.
   */
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.chargeResearcherInfo();
      }
    });
  }

  /**
   * Loads researcher information and associated journal items based on the researcherId obtained from the route.
   */
  private chargeResearcherInfo() {
    const researcherId = this.route.snapshot.params['id'];
    this.researcherService
      .getResearcher(researcherId)
      .subscribe((researcher) => {
        this.researcher = researcher;
        this.journalService
          .getJournalByResearcher(researcherId)
          .subscribe((journals) => {
            this.journalItems = journals;
          });
      });
  }
}
