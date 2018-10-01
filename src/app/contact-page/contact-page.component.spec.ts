import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailedComponent } from './contact-page.component';

describe('ContactDetailedComponent', () => {
  let component: ContactDetailedComponent;
  let fixture: ComponentFixture<ContactDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
