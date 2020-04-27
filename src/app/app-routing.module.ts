import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageScheduleComponent} from './main-page-schedule/main-page-schedule.component';


const routes: Routes = [
  {path: '', component: MainPageScheduleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
