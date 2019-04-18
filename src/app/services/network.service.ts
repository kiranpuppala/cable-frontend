import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


class RespType {
  status: String;
  code: String
}

export class NetworkService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status},` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  addCustomer(request: any,httpHeaders:HttpHeaders): Observable<RespType> {
    let url = "http://";
    return this.http.post<RespType>(url, request, {headers:httpHeaders})
      .pipe(
        catchError(this.handleError)
      );
  }
}
