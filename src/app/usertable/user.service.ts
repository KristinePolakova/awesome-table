import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private userUrl = 'api/tabledata.json';

  constructor(private http: HttpClient) {

  }

  getUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.userUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data)))
      // catchError(this.handleError)
    );
  }

//   private handleError(err: HttpErrorResponse): Observable<never> {
//     let errorMessage = '';
//     if (err.error instanceof ErrorEvent) {
//       errorMessage = `An error occurred: ${err.error.message}`;
//     } else {
//       errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
//     }
//     console.log(errorMessage);
//     return throwError(() => errorMessage);
//   }
 }