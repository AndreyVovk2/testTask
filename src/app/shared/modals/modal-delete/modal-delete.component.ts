import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HttpMainPageService} from '../../service/http-main-page/http-main-page.service';
import {MainPageComponent} from '../../../main-content/main-page/main-page.component';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalDeleteComponent>, @Inject(MAT_DIALOG_DATA) public indexTask,
              public httpMainPageService: HttpMainPageService
  ) {
  }

  ngOnInit() {
  }

  deleteTask(v): void {
    if (v === 2) {
      this.httpMainPageService.deleteTask(this.indexTask.i).subscribe(res => {
        this.httpMainPageService.getTask();
      }, error => console.log(error));
    }
    this.dialogRef.close();
  }
}
