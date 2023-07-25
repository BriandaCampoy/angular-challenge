import { Component, inject } from '@angular/core';
import { Journal } from 'src/app/interfaces/journal';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { LoggedUserService } from 'src/app/services/logged-user.service';

/**
 * HomeComponent is a component responsible for displaying the user's home page.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  /**
   * Creates an instance of HomeComponent.
   * @param subscriptionService - The SubscriptionService instance injected via dependency injection.
   */
  constructor(private subscriptionService: SubscriptionService) {}

  /**
   * An array of journal items to be displayed on the home page.
   */
  journalItems: Journal[] = [];

  /**
   * The loggedUserService instance injected via dependency injection.
   */
  loggedUserService: LoggedUserService = inject(LoggedUserService);

  /**
   * Initializes the component and fetches the feed for the logged-in user.
   */
  ngOnInit() {
    this.subscriptionService
      .getFeed(this.loggedUserService.loggedUser.researcherId)
      .subscribe((feed) => {
        this.journalItems = feed;
      });
  }
}
