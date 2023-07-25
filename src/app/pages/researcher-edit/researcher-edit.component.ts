import { Component, inject } from '@angular/core';
import { Researcher } from 'src/app/interfaces/researcher';
import { LoggedUserService } from 'src/app/services/logged-user.service';
import { ResearcherService } from 'src/app/services/researcher.service';
import { Router } from '@angular/router';

/**
 * ResearcherEditComponent is a component used for editing researcher information.
 */
@Component({
  selector: 'app-researcher-edit',
  templateUrl: './researcher-edit.component.html',
})
export class ResearcherEditComponent {
  /**
   * The logged-in researcher whose information is being edited.
   */
  loggedUser: Researcher = inject(LoggedUserService).loggedUser;

  /**
   * The new user data that will be updated for the researcher.
   */
  newUserData = {
    name: '',
    password: '',
    newPassword: '',
  };

  /**
   * Indicates if there is an error with the entered password.
   */
  passwordError: boolean = false;

  /**
   * Creates an instance of ResearcherEditComponent.
   * @param researcherService - The ResearcherService instance injected via dependency injection.
   * @param router - The Router instance injected via dependency injection.
   */
  constructor(
    private researcherService: ResearcherService,
    private router: Router
  ) {}

  /**
   * Handles the form submission for updating researcher information.
   */
  handleSubmit() {
    if (this.newUserData.password != this.loggedUser.password) {
      this.passwordError = true;
    } else {
      // Update the researcher information with the new data
      this.loggedUser.name = this.newUserData.name;
      this.loggedUser.password = this.newUserData.newPassword;

      // Call the researcher service to update the researcher
      this.researcherService
        .putResearcher(this.loggedUser)
        .subscribe(() =>
          this.router.navigate([
            '/researcher/profile/',
            this.loggedUser.researcherId,
          ])
        );
    }
  }
}
