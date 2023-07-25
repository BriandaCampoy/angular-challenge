import { Component, Input } from '@angular/core';
import { Journal } from 'src/app/interfaces/journal';
import { SubscriptionService } from 'src/app/services/subscription.service';

/**
 * FeedComponent displays a list of journal items in a feed.
 * It takes an array of Journal items as input to be displayed in the feed.
 */
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent {
  /**
   * The array of Journal items to be displayed in the feed.
   */
  @Input() JorunalItems!: Journal[];

  /**
   * Creates an instance of FeedComponent.
   * @param subscriptionService - The SubscriptionService instance injected via dependency injection.
   */
  constructor(private subscriptionService: SubscriptionService) {}
}
