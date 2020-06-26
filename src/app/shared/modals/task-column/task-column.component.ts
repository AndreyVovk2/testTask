import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {HttpMainPageService} from '../../service/http-main-page/http-main-page.service';
import {take} from 'rxjs/operators';
import {ModalDeleteComponent} from '../modal-delete/modal-delete.component';
import {Tasks} from '../../service/interface/mat-table';
import {ModalEditComponent} from '../modal-edit/modal-edit.component';

@Component({
  selector: 'app-task-column',
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.scss']
})
export class TaskColumnComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<TaskColumnComponent>, @Inject(MAT_DIALOG_DATA) public dataTask, private dialog: MatDialog) {
  }

  ngOnInit() {
    console.log(this.dataTask);
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
      this.dialogRef.close();
    });
  }

  deleteTask(i: number): void {
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      width: '400px',
      height: '200px',
      data: {i}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dialogRef.close();
    });
  }
}
