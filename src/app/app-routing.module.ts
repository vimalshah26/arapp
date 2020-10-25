import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArListComponent } from './ar-list/ar-list.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: 'arlist', component: ArListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:id', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
