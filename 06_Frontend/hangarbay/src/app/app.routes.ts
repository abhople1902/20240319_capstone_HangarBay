import { Routes } from '@angular/router';
import { CreateRepairsComponent } from '../app/create-repairs/create-repairs.component';
import { CreateInventoryComponent } from './pages/create-inventory/create-inventory.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SigninComponent } from './pages/signin/signin.component';

export const routes: Routes = [
  { path: 'dash', component: DashboardComponent },
  { path: 'createrepairs', component: CreateRepairsComponent },
  { path: 'addinventory', component: CreateInventoryComponent },
  { path: '', component: SigninComponent }
];
