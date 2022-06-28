import { ComponentFixture, TestBed } from '@angular/core/testing';

import { loginpageComponent } from './loginpage.component';

describe('LoginPageComponent', () => {
  let component: loginpageComponent;
  let fixture: ComponentFixture<loginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ loginpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(loginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
