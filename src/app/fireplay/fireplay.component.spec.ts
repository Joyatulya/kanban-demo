import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireplayComponent } from './fireplay.component';

describe('FireplayComponent', () => {
  let component: FireplayComponent;
  let fixture: ComponentFixture<FireplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FireplayComponent]
    });
    fixture = TestBed.createComponent(FireplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
