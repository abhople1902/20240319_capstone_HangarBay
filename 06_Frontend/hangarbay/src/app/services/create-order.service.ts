import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateOrderService {
  private apiUrl = 'http://localhost:3000/order/create';

  constructor(private http: HttpClient) { }

  createOrder(data: any): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   // 'Authorization': `Bearer ${this.bearerToken}`
    // });

    return this.http.post(this.apiUrl, data);
  }
}
