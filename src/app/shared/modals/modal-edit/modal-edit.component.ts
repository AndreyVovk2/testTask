import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HttpMainPageService} from '../../service/http-main-page/http-main-page.service';
import {error} from 'util';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {
  edit = false;
  public value: string;
  editDate = new Date();

  constructor(public dialogRef: MatDialogRef<ModalEditComponent>, @Inject(MAT_DIALOG_DATA) public dataTask,
              public httpMainPageService: HttpMainPageService) {
  }

  ngOnInit() {
    console.log(this.dataTask);
  }

  editDescription(v) {
    console.log(v);
    if (v === 2) {
      this.edit = true;
    } else {
      this.dialogRef.close();
    }
  }

  editTask() {
    const editData = {
      description: this.dataTask.description,
      date: this.dataTask.date,
      editDate: this.editDate
    };
    console.log(editData);
    this.httpMainPageService.putTask(this.dataTask.id, editData).toPromise().then(res => {
      console.log(res);
      this.dialogRef.close();
    });
  }
}
