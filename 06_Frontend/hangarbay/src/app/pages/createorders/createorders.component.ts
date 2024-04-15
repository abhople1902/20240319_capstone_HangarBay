import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // Import MatDialog
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';



// import { InfoItem } from './info.model';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Import FormGroup, FormControl, and Validators


import { CreateOrderService } from '../../services/create-order.service';
import { SidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-createorders',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    SidebarComponent,
  ],
  templateUrl: './createorders.component.html',
  styleUrl: './createorders.component.css'
})
export class CreateordersComponent implements OnInit {

  orderData: any[] = [];
  isLoading: Boolean = false;

  orderForm = new FormGroup({
    itemName: new FormControl('', Validators.required),
    quantity: new FormControl(0, Validators.required),
  });

  categories = ['Airframe', 'Engine', 'Avionics', 'Interior'];

  constructor(private createOrderService: CreateOrderService, private router: Router, private http: HttpClient) { }
  
  ngOnInit(): void {
    this.fetchOrderData();
  }


  fetchOrderData(){
    this.http.get<any>('http://localhost:3000/order/all')
      .subscribe(
        (data: any[]) => {
          console.log(data);
          
          // Extract required fields from the API response
          // this.cardTitle = data.category; // Use category as title
          // this.cardSubtitle = data.description; // Use description as subtitle
          // this.longText = data.status; // Use status as longtext
          this.orderData = data;
        },
        error => {
          console.log('Error fetching repair data:', error);
        }
      );
  }


  onSubmit() {
    if (this.orderForm.valid) {
      const itemData = {
        itemName:this.orderForm.value.itemName,
        quantity:this.orderForm.value.quantity,
      };

      console.log(itemData)
      this.createOrderService.createOrder(itemData).subscribe(
        (response) => {
          console.log('Order created successfully:', response);
          this.isLoading = true;
          setTimeout(() => {
            this.router.navigate(['dash']);
            this.isLoading = false;
          }, 3000);
        },
        (error) => {
          console.error(error);
          // Add any additional logic for error handling
        }
      );
    }
  }

  navigateBack() {
    this.router.navigate(['dash']);
  }
}
