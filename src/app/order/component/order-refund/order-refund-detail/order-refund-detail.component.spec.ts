import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRefundDetailComponent } from './order-refund-detail.component';

describe('OrderRefundDetailComponent', () => {
  let component: OrderRefundDetailComponent;
  let fixture: ComponentFixture<OrderRefundDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderRefundDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRefundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
