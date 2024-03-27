import { Routes } from '@angular/router';
import { NewrepairComponent } from './pages/newrepair/newrepair.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'createrepairs', component: NewrepairComponent }
];
