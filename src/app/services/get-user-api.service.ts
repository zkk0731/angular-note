import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetUserApiService {
  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return this.http.get('https://randomuser.me/api/');
  }
}
