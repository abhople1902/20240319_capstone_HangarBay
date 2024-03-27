import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CreateRepairsComponent } from '../../create-repairs/create-repairs.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-newrepair',
  standalone: true,
  imports: [SidebarComponent, CreateRepairsComponent, CommonModule, HttpClientModule],
  templateUrl: './newrepair.component.html',
  styleUrl: './newrepair.component.css'
})
export class NewrepairComponent {

}
