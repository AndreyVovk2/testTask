import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainModule} from './main-content/main.module';
import {HttpClientModule} from '@angular/common/http';
import { ModalDeleteComponent } from './shared/modals/modal-delete/modal-delete.component';
import { ModalEditComponent } from './shared/modals/modal-edit/modal-edit.component';
import { SelectButtonComponent } from './shared/select-button/select-button.component';
import { TaskColumnComponent } from './shared/modals/task-column/task-column.component';
@NgModule({
  declarations: [
    AppComponent,
    ModalDeleteComponent,
    ModalEditComponent,
    SelectButtonComponent,
    TaskColumnComponent
  ],
  imports: [
    HttpClientModule,
    MainModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
