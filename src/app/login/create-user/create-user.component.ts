import { Component } from '@angular/core';
import { ResearcherService } from 'src/app/services/researcher.service';
import { Researcher } from 'src/app/interfaces/researcher';
import { Router } from '@angular/router';

/**
 * CreateUserComponent is a component responsible for creating a new user.
 */
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent {
  /**
   * Creates an instance of CreateUserComponent.
   * @param researcherService - The ResearcherService instance injected via dependency injection.
   * @param router - The Router instance injected via dependency injection.
   */
  constructor(
    private researcherService: ResearcherService,
    private router: Router
  ) {}

  /**
   * A boolean flag to indicate if there's a password error.
   */
  passwordError: boolean = false;

  /**
   * An object representing the new researcher with name, email, password, and confirmPassword properties.
   */
  newResearcher = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  /**
   * Creates a new user by calling the postResearcher() method of the ResearcherService.
   * If the passwords match, a new Researcher object is created and passed to the service for creation.
   * If the creation is successful, the user is navigated to the login page.
   * If the passwords don't match, the passwordError flag is set to true.
   */
  createUser() {
    if (this.newResearcher.password !== this.newResearcher.confirmPassword) {
      this.passwordError = true;
    } else {
      const researcher: Researcher = {
        name: this.newResearcher.name,
        email: this.newResearcher.email,
        password: this.newResearcher.password,
        researcherId: '00000000-0000-0000-0000-000000000000',
      };
      this.researcherService
        .postResearcher(researcher)
        .subscribe(() => this.router.navigate(['/login']));
    }
  }
}
