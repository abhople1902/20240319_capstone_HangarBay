import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsdashComponent } from './repairsdash.component';

describe('RepairsdashComponent', () => {
  let component: RepairsdashComponent;
  let fixture: ComponentFixture<RepairsdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepairsdashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepairsdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
