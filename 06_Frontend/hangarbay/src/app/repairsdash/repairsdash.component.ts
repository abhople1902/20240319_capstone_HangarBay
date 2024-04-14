import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


//Services
import { CreateRepairService } from '../services/createrepair/create-repair.service';
import { error } from 'console';


@Component({
  selector: 'app-repairsdash',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './repairsdash.component.html',
  styleUrls: ['./repairsdash.component.css']
})
export class RepairsdashComponent implements OnInit {
  // longText: string = '';
  // cardTitle: string = '';
  // cardSubtitle: string = '';
  repairData: any[] = [];
  intro = '';
  position: String = '';
  isLoading: Boolean = false
  // statusChanged: Boolean = false;

  statuses = ['In Progress', 'Completed', 'Delayed'];

  constructor(private http: HttpClient, private router: Router, private createRepairService: CreateRepairService) { }

  ngOnInit(): void {
    this.fetchRepairData();

    this.repairData.forEach(repair => {
      repair.statusChanged = false;
    });
  }

  onStatusChange(repair: any, event: any) {
    repair.statusChanged = true;
  }


  updateRepairStatus(repair: any) {
    console.log(repair);
    

    const statusData = {
      status: repair.status
    }
    this.createRepairService.updateRepair(statusData, repair._id).subscribe(
      (response) => {
        console.log("Repair status updated:\n", response);
        this.isLoading = true; // Show loading indicator
        setTimeout(() => {
          window.location.reload();
          this.isLoading = false; // Hide loading indicator after reloading
        }, 3000);
      },
      (error) => {
        console.log(error);
      });
  }

  fetchRepairData() {
    const whoareyou = localStorage.getItem('role');
    const name = localStorage.getItem('username');
    this.intro = name ?? '';
    if (whoareyou == "operator") {
      this.position = "Operator";
    } else if (whoareyou == "admin") {
      this.position = "Admin";
    }


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
