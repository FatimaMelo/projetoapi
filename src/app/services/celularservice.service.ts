import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Celular } from '../components/Celular';

@Injectable({
  providedIn: 'root'
})
export class CelularserviceService {

  private apiUrl = 'http://localhost:3000/celulares'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Celular[]>{
    return this.http.get<Celular[]>(this.apiUrl)

  }
}
