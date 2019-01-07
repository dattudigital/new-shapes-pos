import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicketNextButtonComponent } from './new-ticket-next-button.component';

describe('NewTicketNextButtonComponent', () => {
  let component: NewTicketNextButtonComponent;
  let fixture: ComponentFixture<NewTicketNextButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTicketNextButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTicketNextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
