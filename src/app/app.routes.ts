import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'demo' },
    { path: 'demo', loadComponent: () => import('./feature/error-toast/error-toast.component').then((com) => com.ErrorToastComponent) },
];
