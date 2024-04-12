import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { RepairsdashComponent } from '../../repairsdash/repairsdash.component';

@Component({
  selector: 'app-myrepairs',
  standalone: true,
  imports: [SidebarComponent, RepairsdashComponent],
  templateUrl: './myrepairs.component.html',
  styleUrl: './myrepairs.component.css'
})
export class MyrepairsComponent {

}
