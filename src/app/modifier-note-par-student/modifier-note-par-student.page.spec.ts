import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierNoteParStudentPage } from './modifier-note-par-student.page';

describe('ModifierNoteParStudentPage', () => {
  let component: ModifierNoteParStudentPage;
  let fixture: ComponentFixture<ModifierNoteParStudentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierNoteParStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
