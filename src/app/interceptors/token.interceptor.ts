import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(!request.url.includes('/oauth/token')){
        request = request.clone({
            setHeaders: {
              Authorization: `${this.auth.getToken()}`
            }
          });
    }

    console.log(request.url)
    
    
    return next.handle(request);
  }
}
