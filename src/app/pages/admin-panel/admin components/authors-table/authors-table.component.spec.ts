import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsTableComponent } from './authors-table.component';

describe('AuthorsTableComponent', () => {
  let component: AuthorsTableComponent;
  let fixture: ComponentFixture<AuthorsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsTableComponent]
    });
    fixture = TestBed.createComponent(AuthorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
