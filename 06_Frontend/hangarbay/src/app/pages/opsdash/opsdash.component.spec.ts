import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsdashComponent } from './opsdash.component';

describe('OpsdashComponent', () => {
  let component: OpsdashComponent;
  let fixture: ComponentFixture<OpsdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpsdashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
