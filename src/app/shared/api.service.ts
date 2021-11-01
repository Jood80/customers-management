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

  postData(data: PersonDTO) {
    return this.http.post<any>('http://localhost:3000/data', data);
  }

  updateUser(data: any, id: string) {
    return this.http.put(`http://localhost:3000/data/${id}`, data);
  }

  removeUser(id: string) {
    return this.http.delete<any>(`http://localhost:3000/data/${id}`);
  }
}
