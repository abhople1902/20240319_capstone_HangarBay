import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-repairsdash',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './repairsdash.component.html',
  styleUrls: ['./repairsdash.component.css']
})
export class RepairsdashComponent implements OnInit {
  // longText: string = '';
  // cardTitle: string = '';
  // cardSubtitle: string = '';
  repairData: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchRepairData();
  }

  fetchRepairData() {
    // Make HTTP request to fetch data from your API
    this.http.get<any>('http://localhost:3000/repairs/all')
      .subscribe(
        (data: any[]) => {
          // Extract required fields from the API response
          // this.cardTitle = data.category; // Use category as title
          // this.cardSubtitle = data.description; // Use description as subtitle
          // this.longText = data.status; // Use status as longtext
          this.repairData = data;
        },
        error => {
          console.log('Error fetching repair data:', error);
        }
      );
  }

  navigateToCreateRepair() {
    this.router.navigate(['/createrepairs']); // Adjust the route path accordingly
  }

}
