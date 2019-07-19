import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PaginationApiService {

  constructor(private http: HttpClient) {
  }

  fetchPaginationInfo(page): Observable<any> {
    return this.http.get(`https://reqres.in/api/users?page=${page}`)
    .pipe(map(response => {
      console.log('fetchPaginationInfo', response)
      return {
        total_pages: response.total_pages,
        per_page: response.per_page,
        total: response.total,
        page: response.page
      };
    }));
  }
}
