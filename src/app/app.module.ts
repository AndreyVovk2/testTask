import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatIconModule, MatSliderModule} from '@angular/material';
import {MainPageScheduleComponent} from './main-page-schedule/main-page-schedule.component';
import {MatMenuModule} from '@angular/material/menu';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {FormsModule} from '@angular/forms';
import {HttpRequestService} from './main-page-schedule/service/http-request/http-request.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MainPageScheduleComponent,
  ],
  imports: [
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
