import { Injectable, signal } from '@angular/core';
import { ERROR_MESSAGES, UNKNOWN_ERROR_MESSAGES } from '../../assets/data/error';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {

  constructor() { }
  private errorSignal = signal<any>(null);

  error$ = this.errorSignal.asReadonly();

  showError(code: number) {
    const error = ERROR_MESSAGES[code] || UNKNOWN_ERROR_MESSAGES;
    this.errorSignal.set({ ...error, expanded: false });
  }

  toggleResolutionSteps() {
    this.errorSignal.update((data: any) => ({ ...data, expanded: !data.expanded }))
  }

  clearError() {
    this.errorSignal.set(null);
  }
}
