import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _registerUrl="http://technical.test.prvak.co.in/api/employeeregister";
private _loginUrl="http://technical.test.prvak.co.in/api/login";
  constructor( private http:HttpClient) { }
  registerUser(user: any){
     return this.http.post<any>(this._registerUrl,user);

  }
  loginterUser(user:any){
    return this.http.post<any>(this._loginUrl,user);
 }
}
