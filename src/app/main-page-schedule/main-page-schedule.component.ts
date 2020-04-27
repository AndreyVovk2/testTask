import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpRequestService} from './service/http-request/http-request.service';
import {fromEvent, Observable,} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, take} from 'rxjs/internal/operators';
import {AddTask} from './service/models/main-scheduler';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page-schedule',
  templateUrl: './main-page-schedule.component.html',
  styleUrls: ['./main-page-schedule.component.scss']
})
export class MainPageScheduleComponent implements OnInit {
  @ViewChild('editValue', {static: false}) getValue: ElementRef;
  @ViewChild('search', {static: true}) searchValue: ElementRef;
  foods = [
    {value: 'name', viewValue: 'name'},
    {value: 'id', viewValue: 'id'},
  ];
  getData: string;
  filterTask = [];
  getInformation = [];
  search$: Observable<any>;
  submitData: AddTask;
  private urlRequest = 'http://localhost:3000/posts';

  constructor(private httpRequestService: HttpRequestService,
              private router: Router) {
  }

  ngOnInit() {
    this.getRequestData();
    this.search();

  }

  getRequestData() {
    this.httpRequestService.get(this.urlRequest).pipe(take(1)).subscribe(res => {
      this.getInformation = res;
      this.filterTask = this.getInformation;
      console.log(this.getInformation);
      console.log(this.filterTask);
    });
  }

  addTask(addTask) {
    console.log(addTask.value.length);
    if (addTask.value.length < 50 && addTask.value.length === 0) {
      alert('more letters');
    } else if (addTask.value.length === 0) {
      alert('little letters');
    } else {
      this.getData = addTask;
      this.submitData = {
        description: addTask.value,
        edit: false,
        complete: false,
        priority: false,
      };

      this.httpRequestService.post(this.urlRequest, this.submitData).pipe(take(1)).subscribe(res => {
        console.log(res);
      });
      this.getRequestData();
    }


  }

  deleteTask(i) {
    console.log(i);
    this.httpRequestService.delete(this.urlRequest + '/' + i + '/').pipe(take(1)).subscribe(res => {
      console.log(res);
      this.getRequestData();
    });
  }

  update(editValue, task, i: boolean) {
    if (!i) {
      if (this.getValue.nativeElement.value.length > 50) {
        alert('more');
      }
      if (this.getValue.nativeElement.value.length === 0) {
        alert('little');
      } else {
        const update: AddTask = {
          description: this.getValue.nativeElement.value,
          edit: false,
          id: task.id,
          complete: task.complete,
          priority: false
        };
        this.httpRequestService.put(this.urlRequest + '/' + task.id + '/', update).pipe(take(1)).subscribe(res =>
          console.log(res));
        this.getRequestData();
      }

    }
  }


  search() {
    this.search$ = fromEvent<any>(this.searchValue.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(0),
        distinctUntilChanged(
        ));
    console.log(this.search$);
    this.search$.subscribe((val: string) => {
        console.log(val);
        this.filterTask = this.getInformation.filter(item => {
          console.log(item);
          if (item.description.toLocaleLowerCase().includes(val.toLocaleLowerCase())) {
            console.log(item);
            return item;
          }
        });
      },
    );
  }

  complete(task, taskComplete: boolean) {
    const compl: AddTask = {
      description: task.description,
      edit: false,
      id: task.id,
      complete: taskComplete,
      priority: false
    };
    this.httpRequestService.put(this.urlRequest + '/' + task.id + '/', compl).pipe(take(1)).subscribe(res =>
      console.log(res));
    this.getRequestData();
  }

  priority(task, setPriority: boolean) {
    console.log();
    const compl: AddTask = {
      description: task.description,
      edit: task.edit,
      id: task.id,
      complete: task.complete,
      priority: setPriority
    };
    this.httpRequestService.put(this.urlRequest + '/' + task.id + '/', compl).pipe(take(1)).subscribe(res => {
        this.getRequestData();
        this.sorts();
      }
    );


  }

  sorts() {
    this.filterTask.sort((a, b) => {
      console.log(a);
      console.log(b);
      if (a.priority === b.priority) {
        return 0;
      }

      if (a.priority) {
        return -1;
      }

      if (b.priority) {
        return 1;
      }
    });
    console.log(this.filterTask);
  }

  allComplete() {
    console.log(this.filterTask);
    this.filterTask.forEach(res => {
      const compl = {
        description: res.description,
        edit: res.edit,
        id: res.id,
        complete: true,
        priority: res.priority
      };
      this.httpRequestService.put(this.urlRequest + '/' + res.id + '/', compl).pipe(take(1)).subscribe(response => {
        console.log(response);

      });

    });
    this.getRequestData();
  }

  sortBy(i: number) {
    if (i === 0) {
      this.filterTask.sort(function (a, b) {
        const nameA = a.description.toLowerCase(), nameB = b.description.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
          return 0;
        }
      });
    } else {
      this.filterTask.sort(function (a, b) {
        return a.id - b.id;
      });
    }
  }
}
