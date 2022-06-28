import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PartnerComponent } from './components/partner/partner.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { loginpageComponent } from './components/loginpage/loginpage.component';


// angular material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { signuppageComponent } from './components/signuppage/signuppage.component';
import { AccountpageComponent } from './components/accountpage/accountpage.component';







@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PartnerComponent,
    CustomerComponent,
    NotFoundComponent,
    loginpageComponent,
    signuppageComponent,
    AccountpageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatCardModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
