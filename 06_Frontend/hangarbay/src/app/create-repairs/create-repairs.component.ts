// import { Component } from '@angular/core';
// import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import {MatIconModule} from '@angular/material/icon';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatButtonModule} from '@angular/material/button';

// import { NgModule } from '@angular/core';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';

// // @Component({
// //   selector: 'app-create-repairs',
// //   standalone: true,
// //   imports: [MatButtonModule, MatDividerModule, MatIconModule, FormsModule, ReactiveFormsModule, CommonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
// //   templateUrl: './create-repairs.component.html',
// //   styleUrls: ['./create-repairs.component.css']
// // })

// // export class CreateRepairsComponent {
// //   formData: any = {
// //     description: '',
// //     category: '',
// //     scheduledDate: ''
// //   };

// //   categories: string[] = ['Category1', 'Category2', 'Category3']; // Provide your categories here

// //   constructor() {}

// //   submitForm() {
// //     // Submit logic goes here
// //     console.log(this.formData);
// //   }
// // }



// // import { Component } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-create-repairs',
//   standalone: true,
//   imports: [MatButtonModule, MatDividerModule, MatIconModule, FormsModule, ReactiveFormsModule, CommonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
//   templateUrl: './create-repairs.component.html',
//   styleUrls: ['./create-repairs.component.css']
// })
// export class CreateRepairsComponent {
//   formData: any = {};
//   categories: string[] = ['Airframe', 'Avionics', 'Engine', 'Interior']; // Categories
//   technicians: any[] = [];
//   selectedTechnicians: any[] = [];
//   technicianFetchError: boolean = false;

//   constructor(private http: HttpClient) {}

//   fetchTechnicians() {
//     const myData = this.formData["category"]
//     const category = this.formData.category;
//     const requestBody = {
//       ...this.formData,
//       technicians: this.selectedTechnicians.map(technician => technician.id)
//     };
    
//     this.http.post<any[]>('localhost:3000/technician/operator', requestBody)
//       .subscribe(
//         (data: any[]) => {
//           this.technicians = data.map(technician => ({ ...technician, selected: false }));
//         },
//         error => {
//           console.log('Error fetching compliances:', error);
//           this.technicianFetchError = true;
//         }
//       );
//   }

//   addCompliances() {
//     // Extract selected compliances and add them to the body of the request
//     const selectedTechnicians = this.technicians.filter(technician => technician.selected);
//     // Do something with the selected compliances, e.g., save them to a property or array
//     console.log('Selected compliances:', selectedTechnicians);
//   }

//   submitForm() {
//     // Prepare data to pass to the API including selected compliances
//     const requestBody = {
//       ...this.formData,
//       technicians: this.selectedTechnicians.map(technician => technician.id)
//     };

//     // Make the POST API call with the requestBody
//     this.http.post('api/submit-repair', requestBody)
//       .subscribe(
//         response => {
//           console.log('Form submitted successfully:', response);
//         },
//         error => {
//           console.log('Error submitting form:', error);
//         }
//       );
//   }
// }



import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'; // Import DataService
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // Import MatDialog
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';

import { InformationDialogComponent } from '../information-dialog/information-dialog.component';
// import { InfoItem } from './info.model';
import { FormData } from '../constants';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Import FormGroup, FormControl, and Validators


// Add a model for your form data (modify as needed)


@Component({
  selector: 'app-create-repairs',
  standalone: true,
  templateUrl: './create-repairs.component.html',
  styleUrls: ['./create-repairs.component.css'],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule
  ]  
})
export class CreateRepairsComponent implements OnInit {
  selectedInfo: String = '';

  causeForm = new FormGroup({
    causeName: new FormControl('', Validators.required),
    fundsRequired: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(\\.[0-9]{1,2})?$/)]),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required)
  });
  // infoData: InfoItem[]; // Not used in this version
  formData: FormData = { field: '' }; // Initialize form data

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit() {
    // No need to fetch information initially
  }

  openDialog() {
    const dialogRef = this.dialog.open(InformationDialogComponent, {
      width: '250px',
      data: { formData: this.formData } // Pass form data to dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedInfo = result;
        // Update your form with the selected information (if applicable)
      }
    });
  }

  onSubmit() {
    console.log("Repair created");
  }
}
