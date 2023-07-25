import { Component, inject } from '@angular/core';
import { LoggedUserService } from './services/logged-user.service';
import { Router } from '@angular/router';

/**
 * AppComponent represents the root component of the Angular application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-challenge';
  loggedUserService = inject(LoggedUserService);

  /**
   * Creates an instance of AppComponent.
   * @param router The Router service used for navigation.
   */
  constructor(private router: Router) {}

  /**
   * Lifecycle hook that is called after the component is initialized.
   * It checks if the user is logged in, and if not, it navigates to the login page.
   */
  ngOnInit() {
    if (this.loggedUserService.loggedUser.researcherId == '') {
      this.router.navigate(['/login']);
    }
  }
}
