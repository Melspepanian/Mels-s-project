import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsPostComponent } from './authors-post.component';

describe('AuthorsPostComponent', () => {
  let component: AuthorsPostComponent;
  let fixture: ComponentFixture<AuthorsPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsPostComponent]
    });
    fixture = TestBed.createComponent(AuthorsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
