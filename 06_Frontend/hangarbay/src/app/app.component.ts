import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateRepairsComponent } from './create-repairs/create-repairs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RepairsdashComponent } from './repairsdash/repairsdash.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateRepairsComponent, DashboardComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hangarbay';
}
