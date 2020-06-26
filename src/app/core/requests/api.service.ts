import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  get(path: string, params: any = {}): Observable<any> {
    return this.http.get(path, params);
  }

  put(path: string, body: any = {}): Observable<any> {
    return this.http.put(path, body);
  }

  post(path: string, body: any = {}): Observable<any> {
    return this.http.post(path, body);
  }

  delete(path): Observable<any> {
    return this.http.delete(path);
  }
}
