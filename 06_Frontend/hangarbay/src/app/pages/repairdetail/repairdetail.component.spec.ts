import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairdetailComponent } from './repairdetail.component';

describe('RepairdetailComponent', () => {
  let component: RepairdetailComponent;
  let fixture: ComponentFixture<RepairdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepairdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepairdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
