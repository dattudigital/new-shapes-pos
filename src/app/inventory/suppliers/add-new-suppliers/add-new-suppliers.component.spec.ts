import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSuppliersComponent } from './add-new-suppliers.component';

describe('AddNewSuppliersComponent', () => {
  let component: AddNewSuppliersComponent;
  let fixture: ComponentFixture<AddNewSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
