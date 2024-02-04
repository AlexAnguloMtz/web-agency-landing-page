import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCrewCardComponent } from './main-crew-card.component';

describe('MainCrewCardComponent', () => {
  let component: MainCrewCardComponent;
  let fixture: ComponentFixture<MainCrewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCrewCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainCrewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
