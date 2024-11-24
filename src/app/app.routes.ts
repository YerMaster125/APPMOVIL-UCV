import { Routes } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.page').then( m => m.AuthPage), canActivate: [NoAuthGuard]
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./pages/auth/sign-up/sign-up.page').then( m => m.SignUpPage)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./pages/auth/forgot-password/forgot-password.page').then( m => m.ForgotPasswordPage)
  },
  {
    path: 'main',
    loadComponent: () => import('./pages/main/main.page').then( m => m.MainPage), canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/main/home/home.page').then( m => m.HomePage), canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/main/profile/profile.page').then( m => m.ProfilePage), canActivate: [AuthGuard]
  },
];
