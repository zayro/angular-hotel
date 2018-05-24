import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Interal components
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListComponent } from './components/list/list.component';
import { MenuComponent } from './components/menu/menu.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**',  redirectTo: '', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponents = [HomeComponent, AdminComponent, ListComponent, MenuComponent];
