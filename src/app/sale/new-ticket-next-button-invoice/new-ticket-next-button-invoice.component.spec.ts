import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicketNextButtonInvoiceComponent } from './new-ticket-next-button-invoice.component';

describe('NewTicketNextButtonInvoiceComponent', () => {
  let component: NewTicketNextButtonInvoiceComponent;
  let fixture: ComponentFixture<NewTicketNextButtonInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTicketNextButtonInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTicketNextButtonInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
