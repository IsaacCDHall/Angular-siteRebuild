import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { BottomBodyComponent } from './bottom-body/bottom-body.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReferencePageComponent } from './reference-page/reference-page.component';
import { DocsPageComponent } from './docs-page/docs-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    BottomBodyComponent,
    NavBarComponent,
    ReferencePageComponent,
    DocsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
