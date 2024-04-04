import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SidebarItem } from '../constants';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sideitems: SidebarItem[] = [
    { label: 'Create Repair', iconClass: 'fa-solid fa-plane', route: '/createrepairs'},
    { label: 'Create Inventory item', iconClass: 'fa-solid fa-gears', route: '/addinventory'}
  ];

  constructor(private router: Router) { }

  // If you need to handle navigation within the SidebarComponent, you can define methods here
  navigateTo(route: string) {
    // this.router.navigate([this.sideitems[0].route]);
  }
  
}
