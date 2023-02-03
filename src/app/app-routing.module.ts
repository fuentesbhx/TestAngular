import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home/detail/:id',
    component: DetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
