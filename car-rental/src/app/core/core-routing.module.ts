import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../main/home/home.component';
import { LoginComponent } from '../main/login/login.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
