import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMeetupsComponent } from './last-meetups.component';

describe('LastMeetupsComponent', () => {
  let component: LastMeetupsComponent;
  let fixture: ComponentFixture<LastMeetupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastMeetupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastMeetupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
