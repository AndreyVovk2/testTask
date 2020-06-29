import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpMainPageService} from '../../shared/service/http-main-page/http-main-page.service';
import {TableBasicExample} from '../../shared/mat-table';
import {MatDialog} from '@angular/material';
import {ModalDeleteComponent} from '../../shared/modals/modal-delete/modal-delete.component';
import {ModalEditComponent} from '../../shared/modals/modal-edit/modal-edit.component';
import {Tasks} from '../../shared/service/interface/mat-table';
import {debounceTime, distinctUntilChanged, map, mergeMap, take, takeUntil} from 'rxjs/operators';
import {TaskColumnComponent} from '../../shared/modals/task-column/task-column.component';
import {fromEvent, Observable} from 'rxjs';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})


export class MainPageComponent implements OnInit {
  @ViewChild('search', {static: false}) search: ElementRef;
  public taskDescription: string;
  public tasks: Tasks[];
  private date = new Date();
  private $getSearch: Observable<any>;
  private getData: Tasks[] = [];


  constructor(
    private httpMainPageService: HttpMainPageService, public tableBasicExample: TableBasicExample,
    private dialog: MatDialog) {
  }


  ngOnInit() {
    this.displayTask();
  }


  filter() {
    this.$getSearch = fromEvent<any>(this.search.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(500),
        distinctUntilChanged(
        ));
    this.$getSearch.subscribe((val: string) => {
      this.getData = this.tasks.filter(item => {
        if (item.description.toLocaleLowerCase().includes(val.toLocaleLowerCase())) {
          return item;
        }
      });
    });
  }

  displayTask(): void {
    this.httpMainPageService.getTask().pipe(take(1)).subscribe(res => {
      this.tasks = res;
      this.getData = this.tasks;

    }, error => console.log(error));
  }

  addTodo(): void {
    const submitData = {
      description: this.taskDescription,
      date: this.date,
      editDate: ''
    };
    this.httpMainPageService.addTask(submitData).pipe(take(1)).subscribe(res => {
      this.taskDescription = '';
      this.displayTask();
    }, error => console.log(error));
  }

  deleteTask(i: number): void {
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      width: '400px',
      height: '200px',
      data: {i}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.displayTask();
    });
  }

  editTask(dataTask: Tasks): void {
    const dialogRef = this.dialog.open(ModalEditComponent, {
      width: '400px',
      height: '200px',
      data: {
        description: dataTask.description,
        date: dataTask.date,
        editDate: '',
        id: dataTask.id
      }
    });
    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      this.displayTask();
    });
  }

  openColumn(taskColumn): void {
    const dialogRef = this.dialog.open(TaskColumnComponent, {
      width: '800px',
      height: '200px',
      data: {
        description: taskColumn.description,
        date: taskColumn.date,
        editDate: taskColumn.editDate,
        id: taskColumn.id
      }
    });
    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      this.displayTask();
    });
  }
}
