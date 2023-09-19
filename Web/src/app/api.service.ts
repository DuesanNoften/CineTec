import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private urlApi = 'https://localhost:7247/location';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.urlApi)
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(this.urlApi, data);
  }
}
