import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { Cliente } from '../models/cliente';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-type": "applicacion/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  public url = 'https://localhost:44396/api/cliente';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Response> {
    return this.http.get<Response>(this.url)
  }

  addCliente(cliente: Cliente): Observable<Response> {
    return this.http.post<Response>(this.url, cliente, httpOptions)
  }
}
