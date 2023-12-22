import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteParEtudiantPage } from './note-par-etudiant.page';

describe('NoteParEtudiantPage', () => {
  let component: NoteParEtudiantPage;
  let fixture: ComponentFixture<NoteParEtudiantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoteParEtudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
