import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { RepairsdashComponent } from '../../repairsdash/repairsdash.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, RepairsdashComponent, HttpClientModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  chart: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch documents from MongoDB (you need to replace 'YOUR_API_ENDPOINT' with your actual API endpoint)
    this.http.get<any[]>('http://localhost:3000/repairs/all').subscribe(docs => {
      // Group documents by scheduled date and count the number of documents in each group
      const counts = this.countRepairsByScheduledDate(docs);

      // Extract dates and counts from grouped data
      const dates = Object.keys(counts).map(dateStr => new Date(dateStr));
      const repairCounts = Object.values(counts);

      // Create chart with extracted data
      this.createChart(dates, repairCounts);
    });
  }

  countRepairsByScheduledDate(docs: any[]): { [key: string]: number } {
    const counts: { [key: string]: number } = {};

    docs.forEach(doc => {
      const scheduledDate = new Date(doc.scheduledDate.$date);
      const formattedDate = scheduledDate.toISOString().split('T')[0]; // Extracting date without time
      if (!counts[formattedDate]) {
        counts[formattedDate] = 0;
      }
      counts[formattedDate]++;
    });

    return counts;
  }

  createChart(dates: Date[], counts: number[]): void {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: dates.map(date => this.formatDate(date)),
        datasets: [
          {
            label: "Total Repairs",
            data: counts,
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
