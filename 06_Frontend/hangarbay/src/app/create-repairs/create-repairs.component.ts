import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'; // Import DataService
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // Import MatDialog
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { InformationDialogComponent } from '../information-dialog/information-dialog.component';
// import { InfoItem } from './info.model';
import { FormData } from '../constants';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Import FormGroup, FormControl, and Validators

import { trigger, state, style, animate, transition } from '@angular/animations';
import { scheduled } from 'rxjs';


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
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule
  ],
  animations: [
    trigger('moveFormLeft', [
      state('open', style({
        transform: 'translateX(-40%)'
      })),
      state('closed', style({
        transform: 'translateX(0)'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('revealSection', [
      state('closed', style({
        right: '-60%'
      })),
      state('open', style({
        right: '0px'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class CreateRepairsComponent implements OnInit {
  isOpen: boolean = false; // Variable to track whether the dropdown is clicked
  selectedInfo: String = '';

  repairsForm = new FormGroup({
    repairName: new FormControl('', Validators.required),
    durationRequired: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    compliance: new FormControl('', Validators.required),
    assignedTechnician: new FormControl('', Validators.required),
    inventoryItems: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    scheduledDate: new FormControl('', Validators.required)
  });

  categories = ['Airframe', 'Engine', 'Avionics', 'Interior'];
  statuses = ['In Progress', 'Completed', 'Delayed'];

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

  toggleSection() {
    this.isOpen = true;
  }

  onSubmit() {
    console.log("Repair created");
  }
}
