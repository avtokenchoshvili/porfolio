import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { MainComponent } from './header/main/main.component';
import { PortfolioComponent } from './header/portfolio/portfolio.component';
import { SignInComponent } from './header/sign-in/sign-in.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';


import { AuthGuard } from './shared/guard/auth.guard';
const routes: Routes = [
  {path : '', component:MainComponent},
  {path:'porfolio',component:PortfolioComponent ,title: 'Porfolio' },
  {path:'sign-in',component:SignInComponent , title: 'Sign' ,},
  {path:'sign-up',component:SignUpComponent , title: 'Sign Up' },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
