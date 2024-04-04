import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // Import MatDialog
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

// import { InfoItem } from './info.model';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Import FormGroup, FormControl, and Validators


import { CreateItemService } from '../../services/create-item.service';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-create-inventory',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    SidebarComponent,
  ],
  templateUrl: './create-inventory.component.html',
  styleUrl: './create-inventory.component.css'
})
export class CreateInventoryComponent {
  inventoryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    // fundsRequired: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(\\.[0-9]{1,2})?$/)]),
    category: new FormControl('', Validators.required),
    quantity: new FormControl(0, Validators.required),
    unitPrice: new FormControl(0, Validators.required),
  });

  categories = ['Airframe', 'Engine', 'Avionics', 'Interior'];

  constructor(private createItemService: CreateItemService, private router: Router) { }
  

  onSubmit() {
    if (this.inventoryForm.valid) {
      const itemData = {
        name:this.inventoryForm.value.name,
        category:this.inventoryForm.value.category,
        quantity:this.inventoryForm.value.quantity,
        unitPrice:this.inventoryForm.value.unitPrice,
      };

      console.log(itemData)
      this.createItemService.createItem(itemData).subscribe(
        (response) => {
          console.log('Item created successfully:', response);

          // TO DO
          // this.router.navigateByUrl('/confirmationpage');
          
        },
        (error) => {
          console.error(error);
          // Add any additional logic for error handling
        }
      );
    }
  }
}
