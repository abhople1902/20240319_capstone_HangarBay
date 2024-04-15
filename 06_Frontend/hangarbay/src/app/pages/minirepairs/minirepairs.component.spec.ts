import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinirepairsComponent } from './minirepairs.component';

describe('MinirepairsComponent', () => {
  let component: MinirepairsComponent;
  let fixture: ComponentFixture<MinirepairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinirepairsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinirepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
