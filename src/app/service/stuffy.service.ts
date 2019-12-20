import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from 'inspector';
import { JsonResponse } from '../model/json-response.class';

@Injectable({
  providedIn: 'root'
})
export class StuffyService {
  url: string = "http://localhost:8080/stuffies/";

  constructor(private http: HttpClient) { }

  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }
}
