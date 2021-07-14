import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  public url = 'https://localhost:44396/api/cliente';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Response> {
    return this.http.get<Response>(this.url)
  }
}
