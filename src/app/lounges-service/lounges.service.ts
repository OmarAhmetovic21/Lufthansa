import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpParams, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoungesService {
  private API_SERVER = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  public getLounges(): Observable<any>{
    var location="FRA";
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_SERVER+'/v1/offers/lounges/'+location,
    {headers: headers.set('Content-Type', 'application/json').set('Accept', 'application/json')}
    
    );
  }
}
