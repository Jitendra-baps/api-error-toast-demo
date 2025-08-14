import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ERROR_MESSAGES } from '../../../assets/data/error';

@Component({
  selector: 'app-error-toast',
  imports: [CommonModule, ToastModule, ButtonModule, RippleModule],
  templateUrl: './error-toast.component.html',
  styleUrl: './error-toast.component.scss',


})
export class ErrorToastComponent {
  constructor(private messageService: MessageService) { }

  showError() {
    const err = ERROR_MESSAGES[401];
    this.messageService.add({
      key: 'errorToast',
      severity: 'error',
      // summary: `${err.header} (${err.code})`,
      // detail: err.onlineSummary,
      sticky: true,
      data: { ...err, expanded: false }
    });
  }

  toggle(message: any) {
    message.data.expanded = !message.data.expanded;
  }

  close() {
    this.messageService.clear('errorToast');
  }
}
