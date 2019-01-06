import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderSupplierComponent } from './purchase-order-supplier.component';

describe('PurchaseOrderSupplierComponent', () => {
  let component: PurchaseOrderSupplierComponent;
  let fixture: ComponentFixture<PurchaseOrderSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrderSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
