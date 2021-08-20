import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOComponent } from './test-o.component';

describe('TestOComponent', () => {
  let component: TestOComponent;
  let fixture: ComponentFixture<TestOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
