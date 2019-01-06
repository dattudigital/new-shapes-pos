import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePhysicalInventoryComponent } from './update-physical-inventory.component';

describe('UpdatePhysicalInventoryComponent', () => {
  let component: UpdatePhysicalInventoryComponent;
  let fixture: ComponentFixture<UpdatePhysicalInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePhysicalInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePhysicalInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
