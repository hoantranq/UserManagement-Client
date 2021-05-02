import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_includes/header/header.component';
import { FooterComponent } from './_includes/footer/footer.component';
import { SidebarComponent } from './_includes/sidebar/sidebar.component';
import { HomeComponent } from './_modules/home/home.component';
import { UsersComponent } from './_modules/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
