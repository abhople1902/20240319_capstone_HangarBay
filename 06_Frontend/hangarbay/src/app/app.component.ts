import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateRepairsComponent } from './create-repairs/create-repairs.component';
import { CreateInventoryComponent } from './pages/create-inventory/create-inventory.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OpsdashComponent } from './pages/opsdash/opsdash.component';
// import { SigninComponent } from './pages/signin/signin.component';
import { RepairsdashComponent } from './repairsdash/repairsdash.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { CreateordersComponent } from './pages/createorders/createorders.component';
import { AllrepairsComponent } from './pages/allrepairs/allrepairs.component';
import { MyrepairsComponent } from './pages/myrepairs/myrepairs.component';
import { MyrepairsdashComponent } from './myrepairsdash/myrepairsdash.component';
import { MinirepairsComponent } from './pages/minirepairs/minirepairs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CreateRepairsComponent, 
    CreateInventoryComponent, 
    DashboardComponent, 
    OpsdashComponent, 
    CommonModule, 
    HttpClientModule, 
    MatInputModule, 
    ConfirmationComponent, 
    CreateordersComponent, 
    AllrepairsComponent, 
    MyrepairsComponent, 
    MyrepairsdashComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hangarbay';
}
