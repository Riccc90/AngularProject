import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Municipio } from 'src/app/models/municipio';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:8080/RestGestioneMunicipioAbitanteSpringDataMaven/rest/municipio/";

@Injectable({
  providedIn: 'root'
})
export class ApiMunicipioService {

  constructor(private http: HttpClient) { }
  
  getMunicipi(): Observable<Municipio[]> {
    return this.http.get<Municipio[]>(apiUrl);
  }

  getMunicipioSingolo(id:any): Observable<Municipio>{
      return this.http.get<Municipio>(apiUrl + id,httpOptions);
  }

  /*getMunicipioSingolo(id: number): Observable<Municipio> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Municipio>(url).pipe(
      tap(_ => console.log(`fetched municipio id=${id}`)),
      catchError(this.handleError<Municipio>(`getMunicipio id=${id}`))
    );
  }*/
  

  addMunicipio(municipio): Observable<Municipio>{
    return this.http.post<Municipio>(apiUrl,municipio,httpOptions);
  }

  updateMunicipio(municipio): Observable<Municipio>{
    return this.http.put<Municipio>(apiUrl,municipio,httpOptions);
  }

  /*updateMunicipio (id, municipio): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, municipio, httpOptions).pipe(
      tap(_ => console.log(`updated municipio id=${id}`)),
      catchError(this.handleError<any>('updateMunicipio'))
    );
  }*/

  deleteMunicipio(id): Observable<Municipio>{
    return this.http.delete<Municipio>(apiUrl + id,httpOptions);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  
}
