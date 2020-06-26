import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {API_URL} from '../../../core/constant/url.constants';
import {ApiService} from '../../../core/requests/api.service';

@Injectable({
  providedIn: 'root'
})
export class HttpMainPageService {

  constructor(private apiService: ApiService) {
  }

  getTask(): Observable<any> {
    return this.apiService.get(API_URL.getTask);
  }

  addTask(data): Observable<any> {
    return this.apiService.post(API_URL.addTask, data);
  }

  deleteTask(i): Observable<any> {
    return this.apiService.delete(API_URL.deleteTask + i + '/');
  }

  putTask(i, data): Observable<any> {
    return this.apiService.put(API_URL.editTask + i + '/', data);
  }
}
