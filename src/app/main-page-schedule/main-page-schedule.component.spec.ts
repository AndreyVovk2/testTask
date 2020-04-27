import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageScheduleComponent } from './main-page-schedule.component';

describe('MainPageScheduleComponent', () => {
  let component: MainPageScheduleComponent;
  let fixture: ComponentFixture<MainPageScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
