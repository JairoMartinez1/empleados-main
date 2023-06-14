import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  baseUri: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http:HttpClient) { }

  //METODO PARA AGREGAR UN NUEVO EMPLEADO
  agregarEmpleado(data):Observable<any> {
    let url = `${this.baseUri}/create` ; //checar comas
    return this.http.post(url,data).pipe(catchError(this.errorManager));
  }

  //METODO PARA OBTENER TODOS LOS EMPLEADOS
  getEmpleados() {
    let url = `${this.baseUri}/empleados` ;
    return this.http.get(url);
  }
}
