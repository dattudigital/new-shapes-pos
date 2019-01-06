import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInventoryTicketComponent } from './new-inventory-ticket.component';

describe('NewInventoryTicketComponent', () => {
  let component: NewInventoryTicketComponent;
  let fixture: ComponentFixture<NewInventoryTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInventoryTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInventoryTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
