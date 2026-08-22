import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglepopupComponent } from './googlepopup.component';

describe('GooglepopupComponent', () => {
  let component: GooglepopupComponent;
  let fixture: ComponentFixture<GooglepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GooglepopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GooglepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
