import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { RepairsdashComponent } from '../../repairsdash/repairsdash.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, RepairsdashComponent, HttpClientModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}