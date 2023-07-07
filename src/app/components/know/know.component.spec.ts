import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowComponent } from './know.component';

describe('KnowComponent', () => {
  let component: KnowComponent;
  let fixture: ComponentFixture<KnowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowComponent]
    });
    fixture = TestBed.createComponent(KnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
