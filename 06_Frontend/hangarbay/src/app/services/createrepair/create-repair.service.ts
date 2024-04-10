import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateRepairService {
  private apiUrl = 'http://localhost:3000/repairs/create';
  // private bearerToken = localStorage.getItem('orgToken');

  constructor(private http: HttpClient) { }

  createRepair(data: any): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   // 'Authorization': `Bearer ${this.bearerToken}`
    // });

    return this.http.post(this.apiUrl, data);
  }
}
