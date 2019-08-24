import { ContactComponent } from './pages/contact/contact.component';
import { WhoAreWeComponent } from './pages/who-are-we/who-are-we.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ServicesComponent } from './pages/ourServices/services.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FilesComponent } from './pages/files/files.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'whoarewe', component: WhoAreWeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'files', component: FilesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
