import { Injectable } from '@angular/core';
import { Researcher } from '../interfaces/researcher';
import { ResearcherService } from './researcher.service';
import { Router } from '@angular/router';
import { SubscriptionService } from './subscription.service';
import { Subscription } from '../interfaces/subscription';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggedUserService {
  /**
   * Service to manage the logged-in user's data and interactions.
   * @param {ResearcherService} service - The ResearcherService to retrieve researchers' data.
   * @param {Router} router - The Router service for navigation.
   * @param {SubscriptionService} subscriptionService - The SubscriptionService to manage subscriptions.
   */
  constructor(
    private service: ResearcherService,
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {
    this.researcherService = this.service;
  }

  researcherService: ResearcherService;

  /**
   * The currently logged-in user's data.
   */
  loggedUser: Researcher = {
    researcherId: '',
    name: '',
    email: '',
    password: '',
  };

  /**
   * An array of subscriptions for the logged-in user.
   */
  subscriptions: Subscription[] = [];

  /**
   * Check if the provided researcher is followed by the logged-in user.
   * @param {Researcher} researcher - The researcher to check.
   * @returns {Subscription | undefined} The subscription object if the researcher is followed, or undefined if not.
   */
  isFollowed(researcher: Researcher): Subscription | undefined {
    return this.subscriptions.find(
      (p) => p.followedResearcherId === researcher.researcherId
    );
  }

  /**
   * Login the user with the provided email and password.
   * @param {string} email - The email of the user.
   * @param {string} password - The password of the user.
   */
  Login(email: string, password: string) {
    const researchers = this.researcherService.getAllResearchers();
    researchers.subscribe((data) => {
      const user = data.filter((r) => r.email == email)[0];
      if (user !== undefined) {
        if (user.password == password) {
          this.loggedUser = user;
          this.refreshSubs();
          this.router.navigate(['']);
        }
      }
    });
  }

  /**
   * Logout the user by resetting the loggedUser object.
   */
  Logout() {
    this.loggedUser = {
      researcherId: '',
      name: '',
      email: '',
      password: '',
    };
  }

  /**
   * Refresh the user's subscriptions by retrieving the latest data from the subscription service.
   */
  refreshSubs() {
    this.subscriptionService
      .getSubscriptions(this.loggedUser.researcherId)
      .subscribe((subs) => {
        this.subscriptions = subs;
      });
  }
}
