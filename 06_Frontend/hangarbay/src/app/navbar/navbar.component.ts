import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SidebarItem } from '../constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  navitems: SidebarItem[] = [];

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.setNavbar();
  }

  setNavbar() {
    const whoareyou = localStorage.getItem('role');
      if(whoareyou == "operator"){
        this.navitems = [
          { label: 'Home', iconClass: 'fa-solid fa-plane', route: '/opsdash'},
          { label: 'My Repairs', iconClass: 'fa-solid fa-plane', route: '/myrepairs'},
          { label: 'Inventory', iconClass: 'fa-solid fa-gears', route: '/addinventory'}
        ];
      } else if(whoareyou == "admin"){
        this.navitems = [
          { label: 'Home', iconClass: 'fa-solid fa-plane', route: '/dash'},
          { label: 'All Repairs', iconClass: 'fa-solid fa-plane', route: '/allrepairs'},
          { label: 'Create Repair', iconClass: 'fa-solid fa-plane', route: '/createrepairs'},
          { label: 'Raise Fault', iconClass: 'fa-solid fa-plane', route: '/createfault'},
          { label: 'Create Inventory item', iconClass: 'fa-solid fa-gears', route: '/addinventory'},
          { label: 'Spare parts order', iconClass: 'fa-solid fa-gears', route: '/order'}
        ];
      }
  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('role');
    localStorage.removeItem('techId');
    localStorage.removeItem('username');
    localStorage.removeItem('category');
    this.router.navigate(['']);
  }

}
