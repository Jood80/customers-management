import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonDTO } from '../cards/cards.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(): any {
    return this.http.get<PersonDTO>('http://localhost:3000/data');
  }
}
