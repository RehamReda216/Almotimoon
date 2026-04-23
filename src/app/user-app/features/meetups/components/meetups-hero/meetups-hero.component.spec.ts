import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupsHeroComponent } from './meetups-hero.component';

describe('MeetupsHeroComponent', () => {
  let component: MeetupsHeroComponent;
  let fixture: ComponentFixture<MeetupsHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetupsHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetupsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
