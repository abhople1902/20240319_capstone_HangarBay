import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrepairComponent } from './newrepair.component';

describe('NewrepairComponent', () => {
  let component: NewrepairComponent;
  let fixture: ComponentFixture<NewrepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewrepairComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewrepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
