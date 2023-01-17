import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { L } from '@angular/core/src/render3';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUser (userName:string): Observable<Object[]> {
    return this.http.get<Object[]>(API + '/' + userName + '/photos');
  }
}
