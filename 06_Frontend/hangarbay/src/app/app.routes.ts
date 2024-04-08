import { Routes } from '@angular/router';
import { CreateRepairsComponent } from '../app/create-repairs/create-repairs.component';
import { CreateInventoryComponent } from './pages/create-inventory/create-inventory.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OpsdashComponent } from './pages/opsdash/opsdash.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FrontComponent } from './pages/front/front.component';

export const routes: Routes = [
  { path: '', component: FrontComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'opsdash', component: OpsdashComponent },
  { path: 'createrepairs', component: CreateRepairsComponent },
  { path: 'addinventory', component: CreateInventoryComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
];
