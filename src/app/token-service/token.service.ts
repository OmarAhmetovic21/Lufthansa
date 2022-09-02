import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private API_SERVER = environment.apiUrl + 'api';

  constructor(private httpClient: HttpClient) { }

  public getToken(data: any): Observable<any>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');  
    return this.httpClient.post(this.API_SERVER + '/oauth/token', data,{headers: headers});
  }
  
}

