import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StyleService } from './service/style/style.service';
import { ScriptService } from './service/script/script.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { CompanyComponent } from './pages/company/company.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    ClientsComponent,
    CompanyComponent,
    ContactComponent,
    NavLinkComponent,
    NotFoundComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ScriptService,
    StyleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
