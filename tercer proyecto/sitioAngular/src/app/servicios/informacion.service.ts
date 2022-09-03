import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  public _subject = new BehaviorSubject<any>("")
  emit<T>(data: T) {
    this._subject.next(data)
  }
  on<T>(): Observable<T> {
    return this._subject.asObservable();
  }
  constructor(private http: HttpClient) { }
  /*OBTENER INFORMACION POR ID*/

  obtenerNoRelacional() {
    return this.http.get('https://ratings-b9a49-default-rtdb.firebaseio.com/collection.json')
  }
  obtenerPeliculas() {
    return this.http.get('http://localhost:3000/peliculas')
  }
}
