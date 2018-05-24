import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Interal components
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';

const appRoutes: Routes = [
  { path: '/', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponents = [HomeComponent, AdminComponent];
