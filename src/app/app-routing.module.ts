import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent }  from './landing-page/landing-page.component';
import { DocsPageComponent }  from './docs-page/docs-page.component';
import { ReferencePageComponent }  from './reference-page/reference-page.component';
import { RegisterComponent }  from './register/register.component';
import { LogInComponent }  from './log-in/log-in.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'docs', component: DocsPageComponent },
  { path: 'reference', component: ReferencePageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'log-in', component: LogInComponent }
  // { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
