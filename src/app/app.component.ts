import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorDialogComponent } from './feature/error-dialog/error-dialog.component';
import { ErrorDialogService } from './service/error-dialog.service';
import { ButtonModule } from 'primeng/button';
import { ErrorToastComponent } from './feature/error-toast/error-toast.component';
import { ErrorToastService } from './service/error-toast.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ErrorDialogComponent, ButtonModule, ErrorToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'error-toast-demo';
  public errorDialogService = inject(ErrorDialogService);
  public errorToastService = inject(ErrorToastService);
}
