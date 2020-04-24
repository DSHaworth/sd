import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
////
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { FlexLayoutModule } from "@angular/flex-layout";
////
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    AboutComponent,
    HomeComponent,
    LandingPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //FlexLayoutModule,
    

    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
