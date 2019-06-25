import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLiveComponent } from './header-live.component';

describe('HeaderLiveComponent', () => {
  let component: HeaderLiveComponent;
  let fixture: ComponentFixture<HeaderLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
