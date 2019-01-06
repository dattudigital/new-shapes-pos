import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicketInvoicePaymentComponent } from './new-ticket-invoice-payment.component';

describe('NewTicketInvoicePaymentComponent', () => {
  let component: NewTicketInvoicePaymentComponent;
  let fixture: ComponentFixture<NewTicketInvoicePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTicketInvoicePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTicketInvoicePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
