import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategoryTableComponent } from './all-category-table.component';

describe('AllCategoryTableComponent', () => {
  let component: AllCategoryTableComponent;
  let fixture: ComponentFixture<AllCategoryTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCategoryTableComponent]
    });
    fixture = TestBed.createComponent(AllCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
