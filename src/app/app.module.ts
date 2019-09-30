import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRequestComponent } from './profile-request/profile-request.component';
import { UpperCasePipe } from './upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    PageErrorComponent,
    ProfileComponent,
    ProfileRequestComponent,
    UpperCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
