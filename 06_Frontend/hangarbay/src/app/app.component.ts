import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateRepairsComponent } from './create-repairs/create-repairs.component';
import { CreateInventoryComponent } from './pages/create-inventory/create-inventory.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SigninComponent } from './pages/signin/signin.component';
import { RepairsdashComponent } from './repairsdash/repairsdash.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateRepairsComponent, CreateInventoryComponent, DashboardComponent, SigninComponent, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hangarbay';
}
