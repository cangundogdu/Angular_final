import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PartnerComponent } from './components/partner/partner.component';
import { loginpageComponent } from './components/loginpage/loginpage.component';
import { signuppageComponent } from './components/signuppage/signuppage.component';
import { AccountpageComponent } from './components/accountpage/accountpage.component';




const routes: Routes = [
  { path: '', component: PartnerComponent },
  { path: 'partner', component: PartnerComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'loginpage', component: loginpageComponent },
  { path: 'signuppage', component: signuppageComponent },
  { path: 'accountpage', component: AccountpageComponent }, 
  { path: '**', component: NotFoundComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
