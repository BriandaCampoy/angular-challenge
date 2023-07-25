import { Component, Input, inject } from '@angular/core';
import { Researcher } from 'src/app/interfaces/researcher';
import { Subscription } from 'src/app/interfaces/subscription';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Router } from '@angular/router';

/**
 * FollowBtnComponent is a reusable component that represents a follow/unfollow button.
 * It allows users to follow/unfollow a researcher.
 */
@Component({
  selector: 'app-follow-btn',
  templateUrl: './follow-btn.component.html',
})
export class FollowBtnComponent {
  /**
   * Creates an instance of FollowBtnComponent.
   * @param subscriptionService - The SubscriptionService instance injected via dependency injection.
   */
  constructor(private subscriptionService: SubscriptionService) {}

  /**
   * The researcher object to be followed/unfollowed.
   */
  @Input() researcher!: Researcher;

  /**
   * The Subscription object that represents the follower relationship with the researcher.
   */
  isFollower: Subscription | undefined;

  /**
   * The instance of LoggedUserService injected via dependency injection.
   */
  loggedUserService: LoggedUserService = inject(LoggedUserService);

  /**
   * The instance of Router injected via dependency injection.
   */
  router: Router = inject(Router);

  /**
   * Handles the follow/unfollow action when the button is clicked.
   */
  handleFollowBtn() {
    if (this.isFollower) {
      this.Unfollow();
    } else {
      this.Follow();
    }
  }

  /**
   * Lifecycle hook that is called after the component is initialized.
   * It fetches the follower relationship status with the researcher using the LoggedUserService.
   */
  ngOnInit() {
    this.isFollower = this.loggedUserService.isFollowed(this.researcher);
  }

  /**
   * Follows the researcher by creating a new subscription.
   * Subscribes to the subscriptionService.setSubscription() method and updates the follower status.
   */
  Follow() {
    if (this.researcher != undefined) {
      this.subscriptionService
        .setSubscription({
          researcherId: this.loggedUserService.loggedUser.researcherId,
          followedResearcherId: this.researcher.researcherId,
        })
        .subscribe((res) => {
          this.isFollower = res.value;
          this.loggedUserService.refreshSubs();
        });
    }
  }

  /**
   * Unfollows the researcher by deleting the existing subscription.
   * Subscribes to the subscriptionService.unSubscribe() method and updates the follower status.
   */
  Unfollow() {
    if (this.isFollower?.subscriptionId !== undefined) {
      this.subscriptionService
        .unSubscribe(this.isFollower.subscriptionId)
        .subscribe((res) => {
          this.isFollower = undefined;
          this.loggedUserService.refreshSubs();
        });
    }
  }
}
