import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyTypingTextComponent } from './reply-typing-text.component';

describe('ReplyTypingTextComponent', () => {
  let component: ReplyTypingTextComponent;
  let fixture: ComponentFixture<ReplyTypingTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplyTypingTextComponent]
    });
    fixture = TestBed.createComponent(ReplyTypingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
