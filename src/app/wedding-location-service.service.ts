import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Weddinglocation} from './core/model/weddinglocation';

@Injectable({
  providedIn: 'root'
})
export class WeddingLocationServiceService {

  private backendUrl: string;

  constructor(private http: HttpClient) {
    this.backendUrl = 'http://localhost:8080/v1/weddinglocations';
  }

  public findAll(): Observable<Weddinglocation[]> {
    const weddingLocations =  this.http.get<Weddinglocation[]>(this.backendUrl);

    return weddingLocations;
  }
}


