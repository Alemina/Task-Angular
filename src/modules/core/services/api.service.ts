import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface } from '../../../interfaces/user.interface';
import { PaginationApiService } from './pagination-api.service';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private paginationApiService: PaginationApiService) {
  }

  fetchUsers(page): Observable<UserInterface> {
    return this.http.get('https://reqres.in/api/users?page=' + page).pipe(map(response => {
      console.log('fetchUsers', response);
      return response.data;
      // return
      // return response.data;
    })) 
  }

  fetchPaginationInfo(page: number): Observable<any> {
    return this.paginationApiService.fetchPaginationInfo(page);
  }

  fetchUserById(id: number): Observable<any> {
    // UserInterface
    return this.http.get(`https://reqres.in/api/users/${id}`)
  }

}
