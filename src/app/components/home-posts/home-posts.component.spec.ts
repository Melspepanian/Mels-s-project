import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePostsComponent } from './home-posts.component';

describe('HomePostsComponent', () => {
  let component: HomePostsComponent;
  let fixture: ComponentFixture<HomePostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePostsComponent]
    });
    fixture = TestBed.createComponent(HomePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
