import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpParams, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private API_SERVER = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getToken(): Observable<any>{
    const body = new HttpParams({
      fromObject: {
        client_id: '8fm3w586ef5svqyzfsq4ejf8',
        client_secret: 'xfbB89ucEez2Se6hxzdM',
        grant_type:	"client_credentials"
      }
  });

  return this.httpClient.post(this.API_SERVER+'/v1/oauth/token',
      body.toString(),
      {
          headers: new HttpHeaders()
              .set('Content-Type', 'application/x-www-form-urlencoded')
      }
  );
  }






  
}

