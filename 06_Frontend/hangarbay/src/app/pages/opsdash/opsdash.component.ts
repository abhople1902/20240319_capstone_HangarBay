import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { RepairsdashComponent } from '../../repairsdash/repairsdash.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-opsdash',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, RepairsdashComponent, HttpClientModule, CommonModule],
  templateUrl: './opsdash.component.html',
  styleUrl: './opsdash.component.css'
})
export class OpsdashComponent {
  constructor(private http: HttpClient, private router: Router) { }
}