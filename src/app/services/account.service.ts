import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private REST_API_SERVER ='https://tshop-dev.tpos.dev'
 
  constructor(private http: HttpClient) { }

  public login(payload: any): Observable<any> {
    const url= `${this.REST_API_SERVER}/api/v1/sign-in/password`
    return this.http.post<any>(url, payload )
  }
  public appUser(): Observable<any> {
    const url= `${this.REST_API_SERVER}/api/v1/app-user/init`
    return this.http.get<any>(url )
  } 

  
}
