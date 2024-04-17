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
  selector: 'app-myrepairsdash',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './myrepairsdash.component.html',
  styleUrl: './myrepairsdash.component.css'
})
export class MyrepairsdashComponent implements OnInit {
  // longText: string = '';
  // cardTitle: string = '';
  // cardSubtitle: string = '';
  repairData: any[] = [];
  faultData: any[] = [];
  intro = '';
  position: String = '';
  isLoading: Boolean = false;
  specialization: string = '';
  imageUrl: string = '';
  // statusChanged: Boolean = false;

  statuses = ['In Progress', 'Completed', 'Delayed'];

  constructor(private http: HttpClient, private router: Router, private createRepairService: CreateRepairService) { }

  ngOnInit(): void {

    const special = localStorage.getItem('category');
    this.specialization = special!;
    if(special == 'Avionics'){
      this.imageUrl = 'assets/avionics.png';
    } else if(special == 'Airframe'){
      this.imageUrl = 'assets/airframe.jpg';
    } else if(special == 'Interior'){
      this.imageUrl = 'assets/interior.png';
    } else if(special == 'Engine'){
      this.imageUrl = 'assets/engine.png';
    }


    this.fetchRepairData();

    this.repairData.forEach(repair => {
      repair.statusChanged = false;
    });

    this.fetchFaultData();
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
        this.isLoading = true;
        setTimeout(() => {
          window.location.reload();
          this.isLoading = false;
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
    this.http.get<any>(`http://localhost:3000/repairs/operator?username=${name}`)
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

  fetchFaultData() {
    this.http.get<any>(`http://localhost:3000/repairs/allfaults`)
      .subscribe(
        (data: any[]) => {
          this.faultData = data;
        },
        error => {
          console.log('Error fetching fault data:', error);
        }
      )
  }

  navigateToCreateRepair() {
    this.router.navigate(['/createrepairs']); // Adjust the route path accordingly
  }

}