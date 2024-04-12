import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrepairsComponent } from './myrepairs.component';

describe('MyrepairsComponent', () => {
  let component: MyrepairsComponent;
  let fixture: ComponentFixture<MyrepairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyrepairsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyrepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
