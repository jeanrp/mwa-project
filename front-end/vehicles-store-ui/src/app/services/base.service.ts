import { Injectable } from '@angular/core'; 
 
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/throw';
import { RequestOptions } from 'http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export abstract class BaseService {
  constructor() { }

  public Token: string = "";

  protected UrlServiceV1: string = "api/v1/";

  protected async extractData(response: Response) {
      let body = await response.json();
      return body.data || {};
  }

  public getUser() {
      return JSON.parse(localStorage.getItem('eio.user'));
  }

  protected async serviceError(error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
          const body = await error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
          errMsg = error.message ? error.message : error.toString();
      }
      
      return Observable.throw(error);
  }
}