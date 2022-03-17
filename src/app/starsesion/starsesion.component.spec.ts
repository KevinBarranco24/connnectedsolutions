import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsesionComponent } from './starsesion.component';

describe('StarsesionComponent', () => {
  let component: StarsesionComponent;
  let fixture: ComponentFixture<StarsesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
