import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoItem } from '../constants';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root' // Make it available throughout the application
})

export class DataService {
  constructor(private http: HttpClient) {}

  // Method to fetch information from your MongoDB backend
  getInformation(): Observable<InfoItem[]> {
    return this.http.get<InfoItem[]>('http://your-backend-api/information'); // Replace with your API endpoint
  }
}

