import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographiesComponent } from './biographies.component';

describe('BiographiesComponent', () => {
  let component: BiographiesComponent;
  let fixture: ComponentFixture<BiographiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiographiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiographiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
