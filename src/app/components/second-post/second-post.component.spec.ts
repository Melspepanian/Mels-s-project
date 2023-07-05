import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPostComponent } from './second-post.component';

describe('SecondPostComponent', () => {
  let component: SecondPostComponent;
  let fixture: ComponentFixture<SecondPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondPostComponent]
    });
    fixture = TestBed.createComponent(SecondPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
