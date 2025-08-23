import { Component, inject } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ErrorDialogService } from '../../service/error-dialog.service';

@Component({
  selector: 'app-error-dialog',
  imports: [CommonModule, ButtonModule, RippleModule, DialogModule,],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent {
  public errorDialogService = inject(ErrorDialogService);

  errorData = this.errorDialogService.error$;
  get dialogVisible() {
    return !!this.errorData();
  }

  set dialogVisible(value: boolean) {
    if (!value) this.errorDialogService.clearError();
  }

  close() {
    this.errorDialogService.clearError();
  }
}
