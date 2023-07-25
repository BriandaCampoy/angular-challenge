import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

/**
 * ConfirmationModalComponent displays a modal for confirming an action.
 * It allows the user to confirm or cancel the action and emits the result.
 */
@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
})
export class ConfirmationModalComponent {
  /**
   * Creates an instance of ConfirmationModalComponent.
   * @param activeModal - The NgbActiveModal instance injected via dependency injection.
   */
  constructor(private activeModal: NgbActiveModal) {}

  /**
   * The title to display in the confirmation modal.
   * @default 'Confirm action'
   */
  @Input() title: string = 'Confirm action';

  /**
   * The message to display in the confirmation modal.
   * @default 'Are you sure you want to perform this action?'
   */
  @Input() message: string = 'Are you sure you want to perform this action?';

  /**
   * The result of the user's confirmation.
   * @default false
   */
  @Input() result: boolean = false;

  /**
   * EventEmitter that emits the result of the user's confirmation.
   * The emitted value will be either true (confirmed) or false (cancelled).
   */
  @Output() confirmed = new EventEmitter<boolean>();

  /**
   * Handles the user's confirmation of the action.
   * Sets the result to true, emits the result, and closes the modal.
   */
  onConfirm() {
    this.result = true;
    this.confirmed.emit(this.result);
    this.activeModal.close();
  }

  /**
   * Handles the user's cancellation of the action.
   * Sets the result to false, emits the result, and closes the modal.
   */
  onClose() {
    this.result = false;
    this.confirmed.emit(this.result);
    this.activeModal.close();
  }
}
