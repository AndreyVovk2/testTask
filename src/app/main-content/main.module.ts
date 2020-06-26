import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page/main-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../shared/material/material.module';
import {AuthComponent} from './registration-page/auth/auth.component';
import {ModalDeleteComponent} from '../shared/modals/modal-delete/modal-delete.component';
import {ModalEditComponent} from '../shared/modals/modal-edit/modal-edit.component';
import {RegistrationComponent} from './registration-page/registration/registration.component';
import {TaskColumnComponent} from '../shared/modals/task-column/task-column.component';

@NgModule({
  imports: [BrowserModule, CommonModule, ReactiveFormsModule, MaterialModule, FormsModule],
  exports: [],
  bootstrap: [],
  entryComponents: [ModalDeleteComponent, ModalEditComponent, TaskColumnComponent],
  declarations: [AuthComponent, MainPageComponent, RegistrationComponent]
})

export class MainModule {
}
