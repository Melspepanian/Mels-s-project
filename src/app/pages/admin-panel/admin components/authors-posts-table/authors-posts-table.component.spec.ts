import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsPostsTableComponent } from './authors-posts-table.component';

describe('AuthorsPostsTableComponent', () => {
  let component: AuthorsPostsTableComponent;
  let fixture: ComponentFixture<AuthorsPostsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsPostsTableComponent]
    });
    fixture = TestBed.createComponent(AuthorsPostsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
