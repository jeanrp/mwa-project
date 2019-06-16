import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
      
    let token = localStorage.getItem('token');
    const authReq = req.clone({ headers: req.headers
                                                .set('Content-Type', 'application/json')
                                                .set('Authorization', `Bearer ${token}`) })
    return next.handle(authReq);
  }


  constructor() { }
}
