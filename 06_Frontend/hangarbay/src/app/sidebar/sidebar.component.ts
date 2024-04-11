import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SidebarItem } from '../constants';
import { log } from 'console';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sideitems: SidebarItem[] = [];

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.setSidebar();
  }

  // setSidebar(){
  //   const whoareyou = localStorage.getItem('role');
  //   if(whoareyou == "operator"){
  //     this.sideitems = [
  //       { label: 'My Repairs', iconClass: 'fa-solid fa-plane', route: '/createrepairs'},
  //       { label: 'Inventory', iconClass: 'fa-solid fa-gears', route: '/addinventory'}
  //     ];
  //   } else if(whoareyou == "admin"){
  //     this.sideitems = [
  //       { label: 'Create Repair', iconClass: 'fa-solid fa-plane', route: '/createrepairs'},
  //       { label: 'Create Inventory item', iconClass: 'fa-solid fa-gears', route: '/addinventory'}
  //     ];
  //   }
  // }
  setSidebar(){
    if (typeof localStorage !== 'undefined') {
      const whoareyou = localStorage.getItem('role');
      if(whoareyou == "operator"){
        this.sideitems = [
          { label: 'My Repairs', iconClass: 'fa-solid fa-plane', route: '/createrepairs'},
          { label: 'Inventory', iconClass: 'fa-solid fa-gears', route: '/addinventory'}
        ];
      } else if(whoareyou == "admin"){
        this.sideitems = [
          { label: 'All Repairs', iconClass: 'fa-solid fa-plane', route: '/allrepairs'},
          { label: 'Create Repair', iconClass: 'fa-solid fa-plane', route: '/createrepairs'},
          { label: 'Create Inventory item', iconClass: 'fa-solid fa-gears', route: '/addinventory'},
          { label: 'Place spare parts order', iconClass: 'fa-solid fa-gears', route: '/order'}
        ];
      }
    } else {
      console.log("localStorage not available");
      
    }
  }

  // If you need to handle navigation within the SidebarComponent, you can define methods here
  navigateTo(route: string) {
    // this.router.navigate([this.sideitems[0].route]);
  }
  
}
