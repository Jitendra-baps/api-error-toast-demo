import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-error-toast',
  imports: [CommonModule, ToastModule, ButtonModule, RippleModule],
  templateUrl: './error-toast.component.html',
  styleUrl: './error-toast.component.scss',
})
export class ErrorToastComponent {
  private messageService = inject(MessageService);

  toggle(message: any) {
    message.data.expanded = !message.data.expanded;
  }

  close() {
    this.messageService.clear('errorToast');
  }
}
