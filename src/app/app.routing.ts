import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Interal components
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**',  redirectTo: '', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponents = [HomeComponent];
