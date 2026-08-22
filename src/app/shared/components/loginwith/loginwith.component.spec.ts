import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginwithComponent } from './loginwith.component';

describe('LoginwithComponent', () => {
  let component: LoginwithComponent;
  let fixture: ComponentFixture<LoginwithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginwithComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
