import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './header/main/main.component';
import { PortfolioComponent } from './header/portfolio/portfolio.component';
import { SignInComponent } from './header/sign-in/sign-in.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';

const routes: Routes = [
  {path : '', component:MainComponent},
  {path:'porfolio',component:PortfolioComponent ,title: 'Porfolio' },
  {path:'sign-in',component:SignInComponent , title: 'Sign' ,},
  {path:'sign-up',component:SignUpComponent , title: 'Sign Up' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
