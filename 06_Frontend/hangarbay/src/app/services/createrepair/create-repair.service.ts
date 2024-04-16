import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UUID } from 'mongodb';

@Injectable({
  providedIn: 'root'
})
export class CreateRepairService {
  repairName: string = '';

  private apiUrl = 'http://localhost:3000/repairs/create';
  private apiUrl2 = 'http://localhost:3000/inventory';
  private apiurl3 = 'http://localhost:3000/repairs';

  constructor(private http: HttpClient) { }

  createRepair(data: any): Observable<any> {
    // const headers = {
    //   headers: new HttpHeaders({
    //     'Authorization': `Bearer ${jwt}`
    //   })
    // }
    return this.http.post(this.apiUrl, data);
  }

  updateInventory(data: any, name: string): Observable<any> {
    return this.http.put(`${this.apiUrl2}/update?name=${name}`, data);
  }

  updateRepair(data: any, id: any): Observable<any> {
    console.log(id);
    console.log(typeof id);
    const temp: UUID = id;
    console.log(typeof temp);
    
    return this.http.put(`${this.apiurl3}/status/${id}`, data);
  }

}