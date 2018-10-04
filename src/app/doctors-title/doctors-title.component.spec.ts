import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsTitleComponent } from './doctors-title.component';

describe('DoctorsComponent', () => {
  let component: DoctorsTitleComponent;
  let fixture: ComponentFixture<DoctorsTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
