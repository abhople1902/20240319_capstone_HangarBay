import { Component, OnInit } from '@angular/core';
import { DataService } from '../../create-repairs/data.service'; // Import DataService
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // Import MatDialog
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from '../../navbar/navbar.component';

//Services
import { ComplianceService } from '../../services/complianceService/compliance.service';
import { InventoryService } from '../../services/inventoryService/inventory.service';
import { CreateRepairService } from '../../services/createrepair/create-repair.service';
import { TechnicianService } from '../../services/technicianService/technician.service';
import { FaultcreateService } from '../../services/faultcreate.service';

import { InformationDialogComponent } from '../../information-dialog/information-dialog.component';
// import { InfoItem } from './info.model';
import { FormData } from '../../constants';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Import FormGroup, FormControl, and Validators

import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { scheduled } from 'rxjs';
import { response } from 'express';
import { isWeakMap } from 'util/types';

@Component({
  selector: 'app-minirepairs',
  standalone: true,
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
    MatCardModule,
    MatButtonModule,
    NavbarComponent,
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
  ],
  templateUrl: './minirepairs.component.html',
  styleUrl: './minirepairs.component.css'
})
export class MinirepairsComponent implements OnInit {
  isOpen: boolean = false; // Variable to track whether the dropdown is clicked
  selectedInfo: String = '';
  complianceData: any[] = [];
  faultData: any[] = [];
  inventoryData: any[] = [];
  particularQuantity: number = 0;
  technicianData: any[] = [];
  categorySelected: any;
  formFieldClicked: any;
  whoareu = localStorage.getItem('token');

  assignedPersonnel: string = '';

  repairsForm = new FormGroup({
    fault: new FormControl('', Validators.required),
    durationRequired: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    compliance: new FormControl('', Validators.required),
    assignedTechnician: new FormControl('', Validators.required),
    inventoryItems: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    scheduledDate: new FormControl('', Validators.required)
  });

  categories = ['Airframe', 'Engine', 'Avionics', 'Interior'];
  statuses = ['In Progress', 'Completed', 'Delayed'];

  // infoData: InfoItem[]; // Not used in this version
  formData: FormData = { field: '' }; // Initialize form data

  constructor(private dataService: DataService, private dialog: MatDialog, private complianceService: ComplianceService, private inventoryService: InventoryService, private technicianService: TechnicianService, private createRepairService: CreateRepairService, private faultCreateService: FaultcreateService, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(InformationDialogComponent, {
      width: '250px',
      data: { formData: this.formData } // Pass form data to dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedInfo = result;
        this.complianceData
      }
    });
  }

  navigateBack() {
    this.router.navigate(['dash']);
  }

  toggleSection(par: String) {
    if(par == 'fault'){
      this.formFieldClicked = 'fault'
      this.faultCreateService.getAllFaults().subscribe(response => {
        this.faultData = response;
      });
    } else if(par == 'compliance'){
      this.formFieldClicked = 'compliance'
      const cat = this.repairsForm.value.category;
      this.complianceService.getComplianceDocument(cat!).subscribe(response => {
        this.complianceData = response;
      });
    } else if(par == 'inventory'){
      this.formFieldClicked = 'inventory'
      const inv = this.repairsForm.value.category;
      this.inventoryService.getInventoryItem(inv!).subscribe(response => {
        this.inventoryData = response;
      })
      this.inventoryData.forEach(item => {
        if(item.quantity <= 0) {
          console.log(`${item.name} is out of stock`);
        }
      })
    } else if(par == 'technician'){
      this.formFieldClicked = 'technician'
      const tech = this.repairsForm.value.category;
      this.categorySelected = tech;
      const techData = {
        specializations: tech
      }
      this.technicianService.getTechnician(techData).subscribe(response => {
        this.technicianData = response;
        console.log(this.technicianData);
        
      })
    }

    if(this.isOpen){
      this.isOpen = false;
    }else {
      this.isOpen = true;
    }
  }


  openSnackBar(message: string, redirectUrl: string) {
    const snackBarRef = this._snackBar.open(message, 'Create Order', {
      duration: 5000,
      panelClass: ['custom-snackbar']
    });

    snackBarRef.onAction().subscribe(() => {
      this.router.navigate([redirectUrl]);
    });
  }


  
  async onSubmit() {
    const invSelected = this.repairsForm.value.inventoryItems
    const quant = this.repairsForm.value.quantity
    let a = Number(quant);

    if (isNaN(a)) {
      console.error('Quantity is not a valid number');
      return;
    }

    let isQuantityAvailable = true;

    await this.inventoryService.getInventoryItemByName(invSelected!).toPromise().then(response => {
      this.particularQuantity = response;
      if(Number(this.particularQuantity) < a){
        
        this.openSnackBar('The Inventory Item quantity you selected is unavailable', 'order');
        isQuantityAvailable = false;
      }
    })

    if(!isQuantityAvailable) {
      return;
    }


    if (this.repairsForm.valid) {
      const repairData = {
        name:this.repairsForm.value.fault,
        category:this.repairsForm.value.category,
        durationRequired:this.repairsForm.value.durationRequired,
        description:this.repairsForm.value.description,
        compliance:this.repairsForm.value.compliance,
        assignedTechnician:this.repairsForm.value.assignedTechnician,
        inventoryItems:this.repairsForm.value.inventoryItems,
        quantity:this.repairsForm.value.quantity,
        status:this.repairsForm.value.status,
        scheduledDate:this.repairsForm.value.scheduledDate
      };
      const updateData = {
        quantity: this.repairsForm.value.quantity
      }


      // Calling createRepairService service to create the repair
      console.log(repairData);
      this.createRepairService.createRepair(repairData).subscribe(
        (response) => {
          console.log('Repair created successfully:', response);
          
        },
        (error) => {
          console.error(error);
        }
      );


      this.createRepairService.updateInventory(updateData, invSelected!).subscribe(
        (response) => {
          console.log('Inventory updated:', response);
          this.router.navigate(['confirm']);
        },
        (error) => {
          console.log(error);
        }
      )

    }
  }
}