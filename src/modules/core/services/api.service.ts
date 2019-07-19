import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from '../../../interfaces/user.interface';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  fetchUsers(page): Observable<UserInterface> {
    return this.http.get<any>('https://reqres.in/api/users?page=' + page).pipe(map(response => {
      return response.data;
    }));
  }

  fetchPaginationInfo(page): Observable<any> {
    return this.http.get<any>(`https://reqres.in/api/users?page=${page}`)
    .pipe(map(response => {
      return {
        total_pages: response.total_pages,
        per_page: response.per_page,
        total: response.total,
        page: response.page
      };
    }));
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`https://reqres.in/api/users/${id}`).pipe(map(response => response));
  }

}
