import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  hello: {};
  constructor(private http: HttpClient) {
  }

  getTask(getTask) {
    this.hello = getTask;
    console.log(this.hello);
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
