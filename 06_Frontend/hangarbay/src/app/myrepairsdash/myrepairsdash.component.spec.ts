import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrepairsdashComponent } from './myrepairsdash.component';

describe('MyrepairsdashComponent', () => {
  let component: MyrepairsdashComponent;
  let fixture: ComponentFixture<MyrepairsdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyrepairsdashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyrepairsdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
