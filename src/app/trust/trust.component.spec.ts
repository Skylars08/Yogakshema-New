import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustComponent } from './trust.component';

describe('TrustComponent', () => {
  let component: TrustComponent;
  let fixture: ComponentFixture<TrustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrustComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
