import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargenComponent } from './margen.component';

describe('MargenComponent', () => {
  let component: MargenComponent;
  let fixture: ComponentFixture<MargenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MargenComponent]
    });
    fixture = TestBed.createComponent(MargenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
