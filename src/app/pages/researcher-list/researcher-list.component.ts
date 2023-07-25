import { Component } from '@angular/core';
import { Researcher } from 'src/app/interfaces/researcher';
import { ResearcherService } from 'src/app/services/researcher.service';

/**
 * ResearcherListComponent is a component used to display a list of researchers.
 */
@Component({
  selector: 'app-researcher-list',
  templateUrl: './researcher-list.component.html',
})
export class ResearcherListComponent {
  /**
   * An array that holds the list of researchers to be displayed.
   */
  researcherList: Researcher[] = [];

  /**
   * Constructs a new instance of the ResearcherListComponent.
   *
   * @param researcherService The service responsible for retrieving researcher data.
   */
  constructor(private researcherService: ResearcherService) {
    this.researcherService.getAllResearchers().subscribe((researcherList) => {
      this.researcherList = researcherList;
    });
  }
}
