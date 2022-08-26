import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  constructor(private http: HttpClient) { }
  obtenerPeliculas() {
    return this.http.get('http://localhost:3000/')
  }
}
