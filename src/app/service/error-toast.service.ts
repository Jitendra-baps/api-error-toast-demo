import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ERROR_MESSAGES, UNKNOWN_ERROR_MESSAGES } from '../../assets/data/error';

@Injectable({
  providedIn: 'root'
})
export class ErrorToastService {

  constructor(private messageService: MessageService) { }

  showError(code: number) {
    const errorInfo = ERROR_MESSAGES[code] || UNKNOWN_ERROR_MESSAGES;

    this.messageService.add({
      key: 'errorToast',
      severity: 'error',
      // summary: `${err.header} (${err.code})`,
      // detail: err.onlineSummary,
      sticky: true,
      data: { ...errorInfo, expanded: false }
    });
  }
}
