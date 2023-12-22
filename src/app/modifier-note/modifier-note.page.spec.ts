import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierNotePage } from './modifier-note.page';

describe('ModifierNotePage', () => {
  let component: ModifierNotePage;
  let fixture: ComponentFixture<ModifierNotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
