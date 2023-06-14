import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayFeedbackPage } from './display-feedback.page';

describe('DisplayFeedbackPage', () => {
  let component: DisplayFeedbackPage;
  let fixture: ComponentFixture<DisplayFeedbackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DisplayFeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
