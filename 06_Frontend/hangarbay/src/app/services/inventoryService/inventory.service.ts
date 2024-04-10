import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private apiUrl = 'http://localhost:3000'; // replace with your API url

  constructor(private http: HttpClient) { }

  getInventoryItem(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/inventory/items?category=${category}`);
  }
}
