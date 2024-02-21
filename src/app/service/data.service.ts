import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../model/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000/data';

  constructor(private http: HttpClient) {}

  getAllData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl);
  }

  getDataById(id: number): Observable<Data> {
    return this.http.get<Data>(`${this.apiUrl}/${id}`);
  }

  createData(data: Partial<Data>): Observable<Data> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<Data>(this.apiUrl, data, { headers });
  }

  updateData(id: number, newData: Partial<Data>): Observable<Data> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<Data>(`${this.apiUrl}/${id}`, newData, { headers });
  }

  deleteData(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
