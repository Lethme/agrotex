import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { CompanyComponent } from './pages/company/company.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export enum LinkType {
  RouterLink,
  AppLink
}

export interface Link {
  route: string,
  type: LinkType,
  text?: string | undefined,
  component?: any | undefined
}

export const links: Array<Link> = [
  { route: '', text: "Home", type: LinkType.AppLink, component: HomeComponent },
  { route: 'services', text: "Services", type: LinkType.AppLink, component: ServicesComponent },
  { route: 'clients', text: "Clients", type: LinkType.AppLink, component: ClientsComponent },
  { route: 'company', text: "Company", type: LinkType.AppLink, component: CompanyComponent },
  { route: 'contact', text: "Contact", type: LinkType.AppLink, component: ContactComponent },
  { route: '**', type: LinkType.RouterLink, component: NotFoundComponent },
];

const routes: Routes = links.map(link => {
  return { path: link.route, component: link.component }
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
