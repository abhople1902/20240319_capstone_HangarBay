import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { RepairsdashComponent } from '../../repairsdash/repairsdash.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { MyrepairsdashComponent } from '../../myrepairsdash/myrepairsdash.component';

@Component({
  selector: 'app-myrepairs',
  standalone: true,
  imports: [SidebarComponent, RepairsdashComponent, NavbarComponent, MyrepairsdashComponent],
  templateUrl: './myrepairs.component.html',
  styleUrl: './myrepairs.component.css'
})
export class MyrepairsComponent {

}
