import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UUID } from 'mongodb';


@Injectable({
  providedIn: 'root'
})
export class FaultcreateService {

  private apiUrl = 'http://localhost:3000/repairs/allfaults';

  constructor(private http: HttpClient) { }

  getAllFaults(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
