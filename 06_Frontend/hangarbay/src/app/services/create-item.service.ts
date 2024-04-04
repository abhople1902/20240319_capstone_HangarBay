import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateItemService {
  private apiUrl = 'http://localhost:3000/inventory/add';
  // private bearerToken = localStorage.getItem('orgToken');

  constructor(private http: HttpClient) { }

  createItem(data: any): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   // 'Authorization': `Bearer ${this.bearerToken}`
    // });

    return this.http.post(this.apiUrl, data);
  }
}
