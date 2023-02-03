import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { Interceptor } from './Interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    DetailComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
