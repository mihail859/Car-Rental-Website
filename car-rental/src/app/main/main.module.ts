import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MainRoutingModule } from './main-routing';




@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  exports: [HomeComponent, LoginComponent, RegisterComponent]
})
export class MainModule { }
