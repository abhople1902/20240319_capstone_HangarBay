import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateordersComponent } from './createorders.component';

describe('CreateordersComponent', () => {
  let component: CreateordersComponent;
  let fixture: ComponentFixture<CreateordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateordersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
