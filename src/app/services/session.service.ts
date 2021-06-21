import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  sessionBaseurl: string = "http://localhost:5000/api/user/";
  constructor(private http: HttpClient) { }

  logInUser(credentials)
  {
    let loginUrl = `${this.sessionBaseurl}login`
    return this.http.post(loginUrl, credentials, {responseType: 'text', withCredentials: true});
  }

  logOutUser()
  {
    let logoutUrl = `${this.sessionBaseurl}logout`
    return this.http.post(logoutUrl, null, { withCredentials: true}).subscribe(
      (response) =>
      {
      },
      (error) =>
      {
      }
    );
  }
}
