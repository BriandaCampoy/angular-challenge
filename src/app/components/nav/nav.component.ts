import { Component, inject } from '@angular/core';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  /**
   * Creates an instance of NavComponent.
   * @param router - The Router instance injected via dependency injection.
   */
  constructor(private router: Router) {}

  /**
   * The instance of LoggedUserService injected via dependency injection.
   */
  loggedUserService: LoggedUserService = inject(LoggedUserService);

  /**
   * The user object representing the currently logged-in user.
   */
  user = this.loggedUserService.loggedUser;

  /**
   * Initializes the component and subscribes to the router events to update the user object when the navigation changes.
   */
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.user = this.loggedUserService.loggedUser;
      }
    });
  }

  /**
   * Logs out the user by calling the Logout() method of the LoggedUserService and navigates to the login page.
   */
  logout() {
    this.loggedUserService.Logout();
    this.router.navigate(['/login']);
  }
}
