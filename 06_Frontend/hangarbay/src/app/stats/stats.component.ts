import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent implements OnInit{

  repairData: any[] = [];
  inventoryData: any[] = [];
  intro = '';
  position: String = '';
  totalRepairs: Number = 0;
  totalInventory: Number = 0;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData(){
    const whoareyou = localStorage.getItem('role');
    const name = localStorage.getItem('username');
    this.intro = name ?? '';
    if (whoareyou == "operator") {
      this.position = "Operator";
    } else if (whoareyou == "admin") {
      this.position = "Admin";
    }


    this.http.get<any>('http://localhost:3000/repairs/all')
      .subscribe(
        (data: any[]) => {
          this.repairData = data;
          this.totalRepairs = this.repairData.length;
        },
        error => {
          console.log('Error fetching repair data: ', error);
        }
      );

    this.http.get<any>('http://localhost:3000/inventory/allitems')
      .subscribe(
        (data: any[]) => {
          this.inventoryData = data;
          this.totalInventory = this.inventoryData.length;
        },
        error => {
          console.log("error fetching inventory count: ", error);
        }
      )
  }
}
