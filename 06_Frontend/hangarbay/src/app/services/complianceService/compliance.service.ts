import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplianceService {

  private apiUrl = 'http://localhost:3000'; // replace with your API url

  constructor(private http: HttpClient) { }

  getComplianceDocument(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/compliance/document?category=${category}`);
  }
}