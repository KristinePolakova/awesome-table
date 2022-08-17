import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private userUrl = 'api/tabledata.json';

  constructor(private http: HttpClient) {}

  getUser(): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(this.userUrl)
      .pipe(tap((data) => console.log('All: ', JSON.stringify(data))));
  }
}
