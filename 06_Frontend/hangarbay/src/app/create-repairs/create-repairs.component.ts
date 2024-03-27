import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// @Component({
//   selector: 'app-create-repairs',
//   standalone: true,
//   imports: [MatButtonModule, MatDividerModule, MatIconModule, FormsModule, ReactiveFormsModule, CommonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
//   templateUrl: './create-repairs.component.html',
//   styleUrls: ['./create-repairs.component.css']
// })

// export class CreateRepairsComponent {
//   formData: any = {
//     description: '',
//     category: '',
//     scheduledDate: ''
//   };

//   categories: string[] = ['Category1', 'Category2', 'Category3']; // Provide your categories here

//   constructor() {}

//   submitForm() {
//     // Submit logic goes here
//     console.log(this.formData);
//   }
// }



// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-repairs',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, FormsModule, ReactiveFormsModule, CommonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
  templateUrl: './create-repairs.component.html',
  styleUrls: ['./create-repairs.component.css']
})
export class CreateRepairsComponent {
  formData: any = {};
  categories: string[] = ['Airframe', 'Avionics', 'Engine', 'Interior']; // Categories
  compliances: any[] = [];
  selectedCompliances: any[] = [];
  complianceFetchError: boolean = false;

  constructor(private http: HttpClient) {}

  fetchCompliances() {
    const myData = this.formData["category"]
    
    this.http.get<any[]>('/')
      .subscribe(
        (data: any[]) => {
          this.compliances = data.map(compliance => ({ ...compliance, selected: false }));
        },
        error => {
          console.log('Error fetching compliances:', error);
          this.complianceFetchError = true;
        }
      );
  }

  addCompliances() {
    // Extract selected compliances and add them to the body of the request
    const selectedCompliances = this.compliances.filter(compliance => compliance.selected);
    // Do something with the selected compliances, e.g., save them to a property or array
    console.log('Selected compliances:', selectedCompliances);
  }

  submitForm() {
    // Prepare data to pass to the API including selected compliances
    const requestBody = {
      ...this.formData,
      compliances: this.selectedCompliances.map(compliance => compliance.id)
    };

    // Make the POST API call with the requestBody
    this.http.post('api/submit-repair', requestBody)
      .subscribe(
        response => {
          console.log('Form submitted successfully:', response);
        },
        error => {
          console.log('Error submitting form:', error);
        }
      );
  }
}
