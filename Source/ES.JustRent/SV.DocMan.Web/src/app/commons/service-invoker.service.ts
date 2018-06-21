/** angular importers**/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http } from '@angular/http';
import { MatSnackBar } from '@angular/material';

/** local application importers**/
import { AppSettings } from '../constants/app-setting';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ServiceInvokerService {
  constructor(private http: HttpClient, public snackBar: MatSnackBar) { }

  /* Get array */
  get(element: any, url): Observable<any> {
    const httpPackage = {
      params: element
    };
    return this.http.get(url, httpPackage)
      .pipe(
        catchError(this.handleError<any>())
      );
  }

  /* Put */
  put<T>(element: T, successMessage: string, errorMessage: string): Observable<any> {
    return this.http.put(AppSettings.API_ADDRESS, element, httpOptions)
      .pipe(
        tap(_ => this.log(successMessage)),
        catchError(this.handleError<any>(errorMessage))
      );
  }

  /* Post */
  post<T>(element: T, url:string, successMessage: string, errorMessage: string): Observable<T> {
    return this.http.post<T>(url, element, httpOptions)
      .pipe(
        tap((data: T) => this.log(successMessage)),
        catchError(this.handleError<T>(errorMessage))
      );
  }

  /*Delete*/
  delete<T>(id, successMessage: string, errorMessage: string): Observable<T> {
    const deleteApi = `${AppSettings.API_ADDRESS}/${id}`;
    return this.http.delete<T>(deleteApi, httpOptions)
      .pipe(
        tap((data: T) => this.log(successMessage)),
        catchError(this.handleError<T>(errorMessage))
      );
  }

  /** Log a message with the MessageService */
  private log(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 2000,
    });
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
