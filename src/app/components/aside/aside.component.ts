import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from 'src/app/services/logged-user.service';

/**
 * AsideComponent displays the user's information in the sidebar
 * and useful options.
 * It fetches the user's data from the LoggedUserService and displays it.
 */
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
})
export class AsideComponent implements OnInit {
  /**
   * The logged-in user's information.
   * @remarks Ensure that the 'loggedUser' property is of the appropriate type.
   */
  user: any;

  /**
   * Creates an instance of AsideComponent.
   * @param loggedUserService - The LoggedUserService instance injected via dependency injection.
   */
  constructor(private loggedUserService: LoggedUserService) {}

  /**
   * Lifecycle hook that runs after Angular initializes the component and its dependencies.
   * Retrieves the logged-in user's data from the LoggedUserService.
   */
  ngOnInit() {
    this.user = this.loggedUserService.loggedUser;
  }
}
