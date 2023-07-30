import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostsTableComponent } from './all-posts-table.component';

describe('AllPostsTableComponent', () => {
  let component: AllPostsTableComponent;
  let fixture: ComponentFixture<AllPostsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllPostsTableComponent]
    });
    fixture = TestBed.createComponent(AllPostsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
