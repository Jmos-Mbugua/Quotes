import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesNavbarComponent } from './quotes-navbar.component';

describe('QuotesNavbarComponent', () => {
  let component: QuotesNavbarComponent;
  let fixture: ComponentFixture<QuotesNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
