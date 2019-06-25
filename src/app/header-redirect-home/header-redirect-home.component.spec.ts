import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRedirectHomeComponent } from './header-redirect-home.component';

describe('HeaderRedirectHomeComponent', () => {
  let component: HeaderRedirectHomeComponent;
  let fixture: ComponentFixture<HeaderRedirectHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRedirectHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRedirectHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
