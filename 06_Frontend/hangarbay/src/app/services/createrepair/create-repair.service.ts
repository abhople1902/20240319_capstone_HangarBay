import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateRepairService {
  private apiUrl = 'http://localhost:3000/repairs/create';
  private apiUrl2 = 'http://localhost:3000/inventory';
  // private bearerToken = localStorage.getItem('orgToken');

  constructor(private http: HttpClient) { }

  createRepair(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateInventory(data: any, name: string): Observable<any> {
    return this.http.put(`${this.apiUrl2}/update?name=${name}`, data);
  }

}