import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'artists', component: ArtistsComponent},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'about', component: AboutComponent },
  { path: 'vote', component: VoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
