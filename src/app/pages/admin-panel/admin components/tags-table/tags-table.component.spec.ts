import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsTableComponent } from './tags-table.component';

describe('TagsTableComponent', () => {
  let component: TagsTableComponent;
  let fixture: ComponentFixture<TagsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagsTableComponent]
    });
    fixture = TestBed.createComponent(TagsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
