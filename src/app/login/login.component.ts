import { Component, inject } from '@angular/core';
import { LoggedUserService } from '../services/logged-user.service';
import { Router } from '@angular/router';

/**
 * LoginComponent is a component responsible for handling the user login functionality.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  /**
   * Creates an instance of LoginComponent.
   * @param router - The Router instance injected via dependency injection.
   */
  constructor(private router: Router) {}

  /**
   * The loggedUserService instance injected via dependency injection.
   */
  loggedUserService = inject(LoggedUserService);

  /**
   * Checks if the user is already logged in, and if so, navigates to the main page.
   */
  ngOnInit() {
    if (this.loggedUserService.loggedUser.name != '') {
      this.router.navigate(['']);
    }
  }

  /**
   * Calls the Login method of the loggedUserService to log in the user.
   * The user's email and password are taken from the researcher object.
   */
  Login() {
    this.loggedUserService.Login(
      this.researcher.email,
      this.researcher.password
    );
  }

  /**
   * An object representing the researcher with email and password properties.
   */
  researcher = {
    email: '',
    password: '',
  };
}
