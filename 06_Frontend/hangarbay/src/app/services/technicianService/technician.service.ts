import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {
  private apiUrl = 'http://localhost:3000'; // replace with your API url

  constructor(private http: HttpClient) { }

  getTechnician(techData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/technician/operator`, techData);
  }

  getTechnicianByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/technician/opinfo?name=${name}`)
  }
}
