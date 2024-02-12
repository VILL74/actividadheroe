import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavheroeComponent } from './navheroe.component';

describe('NavheroeComponent', () => {
  let component: NavheroeComponent;
  let fixture: ComponentFixture<NavheroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavheroeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavheroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
