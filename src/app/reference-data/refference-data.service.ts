import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpParams, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../token-service/token.service';

@Injectable({
  providedIn: 'root'
})
export class RefferenceDataService {
  private API_SERVER = environment.apiUrl;

  constructor(private httpClient: HttpClient,
              private tokenService: TokenService) { }

  

/* public getNearestAirports(latitude, longitude): Observable<any>{
    const headers = new HttpHeaders();
    return this.httpClient.get(this.API_SERVER+'/v1/mds-references/airports/nearest/'+latitude+","+longitude,
    {headers: headers.set('Content-Type', 'application/json').set('Accept', 'application/json')}
    
    );
  }*/
}

