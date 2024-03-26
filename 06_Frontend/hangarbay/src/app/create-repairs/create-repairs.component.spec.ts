import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRepairsComponent } from './create-repairs.component';

describe('CreateRepairsComponent', () => {
  let component: CreateRepairsComponent;
  let fixture: ComponentFixture<CreateRepairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRepairsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
