import { Component, Input } from '@angular/core';
import { Researcher } from 'src/app/interfaces/researcher';

/**
 * ResearcherCardComponent is a component used to display researcher information in a card format.
 */
@Component({
  selector: 'app-researcher-card',
  templateUrl: './researcher-card.component.html',
})
export class ResearcherCardComponent {
  /**
   * The researcher object to be displayed in the card.
   */
  @Input() researcher!: Researcher;
}
