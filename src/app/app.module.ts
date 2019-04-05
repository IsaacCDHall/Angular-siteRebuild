import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { BottomBodyComponent } from './bottom-body/bottom-body.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReferencePageComponent } from './reference-page/reference-page.component';
import { DocsPageComponent } from './docs-page/docs-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    BottomBodyComponent,
    NavBarComponent,
    ReferencePageComponent,
    DocsPageComponent,
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
