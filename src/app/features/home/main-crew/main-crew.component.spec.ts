import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCrewComponent } from './main-crew.component';

describe('MainCrewComponent', () => {
  let component: MainCrewComponent;
  let fixture: ComponentFixture<MainCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCrewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
