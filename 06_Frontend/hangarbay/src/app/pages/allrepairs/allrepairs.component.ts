import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { RepairsdashComponent } from '../../repairsdash/repairsdash.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-allrepairs',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, RepairsdashComponent, HttpClientModule, CommonModule],
  templateUrl: './allrepairs.component.html',
  styleUrl: './allrepairs.component.css'
})
export class AllrepairsComponent {

}
