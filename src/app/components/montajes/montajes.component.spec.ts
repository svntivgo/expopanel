import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontajesComponent } from './montajes.component';

describe('MontajesComponent', () => {
  let component: MontajesComponent;
  let fixture: ComponentFixture<MontajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MontajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
