import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InfoItem } from '../constants'; // Path to your info model
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-information-dialog',
  standalone: true,
  imports: [MatDialogModule, CommonModule, MatRadioModule, FormsModule],
  templateUrl: './information-dialog.component.html',
  styleUrls: ['./information-dialog.component.css']
})
export class InformationDialogComponent implements OnInit {
  infoData: InfoItem[] = [];
  selectedItem: InfoItem["name"] = '';

  constructor(
    public dialogRef: MatDialogRef<InformationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { infoData: InfoItem[] }
  ) {}

  ngOnInit() {
    this.infoData = this.data.infoData;
  }

  ///////////////////////////////////////
  selectItem(item: InfoItem) {
    this.selectedItem = '';
  }

  onNoClick() {
    this.dialogRef.close(this.selectedItem);
  }
}

