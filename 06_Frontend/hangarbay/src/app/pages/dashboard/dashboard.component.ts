import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { RepairsdashComponent } from '../../repairsdash/repairsdash.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';
import { StatsComponent } from '../../stats/stats.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, StatsComponent, RepairsdashComponent, HttpClientModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }
}
