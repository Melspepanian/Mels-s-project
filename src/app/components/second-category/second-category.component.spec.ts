import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCategoryComponent } from './second-category.component';

describe('SecondCategoryComponent', () => {
  let component: SecondCategoryComponent;
  let fixture: ComponentFixture<SecondCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondCategoryComponent]
    });
    fixture = TestBed.createComponent(SecondCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
