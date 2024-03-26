import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-repairs',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create-repairs.component.html',
  styleUrls: ['./create-repairs.component.css']
})
export class CreateRepairsComponent {
  createRepairForm: FormGroup;
  selectedCategory: string= '';
  selectedItem: string = '';
  items: string[] = [];


  constructor(
    private formBuilder: FormBuilder,
    // private http: HttpClient,
    // private router: Router
  ) {
    this.createRepairForm = this.formBuilder.group({
      selectedCategory: [''],
      selectedItem: [''],
      items: []
    });
  }


  onCategoryChange() {
    console.log("Hey")
    if (this.selectedCategory === 'Airframe') {
      this.items = ['Wings', 'Panels'];
    } else if (this.selectedCategory === 'Engine') {
      this.items = ['Rotor'];
    } else if (this.selectedCategory === 'Avionics') {
      this.items = ['Radar'];
    } else {
      this.items = [];
    }
  }
}