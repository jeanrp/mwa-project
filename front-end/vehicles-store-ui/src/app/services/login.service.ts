import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserLoginModel } from '../models/UserLoginModel';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  login(user: UserLoginModel) {
    let response = this.http.post(this.baseUrl + "authentication", user)
      .pipe(map((res: Response) => {
        return super.extractData(res);
      }), catchError((err: HttpErrorResponse) => {
        return super.serviceError(err);
      }));
    return response;
  }

  isUserLoggedIn(){ 
    let user = localStorage.getItem('user');

    return !(user === null);
  }

  logout(){
      localStorage.removeItem("user");
  }
}
