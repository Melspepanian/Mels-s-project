import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowTableComponent } from './know-table.component';

describe('KnowTableComponent', () => {
  let component: KnowTableComponent;
  let fixture: ComponentFixture<KnowTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowTableComponent]
    });
    fixture = TestBed.createComponent(KnowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
