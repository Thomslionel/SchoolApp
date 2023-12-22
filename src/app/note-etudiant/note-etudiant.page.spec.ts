import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoteEtudiantPage } from './note-etudiant.page';

describe('NoteEtudiantPage', () => {
  let component: NoteEtudiantPage;
  let fixture: ComponentFixture<NoteEtudiantPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(NoteEtudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
