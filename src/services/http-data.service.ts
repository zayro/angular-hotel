import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { config } from '../config/';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpData {
  private api: String = `${environment.API_URL}`;

  constructor(private http: HttpClient) {}


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was:`, error
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }



  general(method: string, url: string, param?: string, data?: Object) {
    const parametros = param ? new HttpParams({ fromString: param }) : null;

    const options = {
      params: parametros,
      body: data
    };

    const urlSend = `${this.api}${url}`;

    return this.http.request(method, urlSend, options);
  }

  /* GET heroes whose name contains search term */
  get(url: string, data?: any) {
    const parametros = data
      ? { params: new HttpParams({ fromString: data }) }
      : {};

    return this.http
      .get(`${this.api}${url}`, parametros)
      .pipe(catchError(this.handleError));
  }

  /** POST: add to the database */
  insert(url: string, data?: any): Observable<{}> {
    return this.http
      .post(`${this.api}${url}`, data)
      .pipe(catchError(this.handleError));
  }

  update(url: string, data?: any): Observable<{}> {
    return this.http
      .put(`${this.api}${url}`, data)
      .pipe(catchError(this.handleError));
  }

  /** DELETE: delete  from the server */
  delete(url: string, data?: any): Observable<{}> {
    return this.http
      .delete(`${this.api}${url}`, data)
      .pipe(catchError(this.handleError));
  }
}
