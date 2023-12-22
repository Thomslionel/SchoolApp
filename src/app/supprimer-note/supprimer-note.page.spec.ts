import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupprimerNotePage } from './supprimer-note.page';

describe('SupprimerNotePage', () => {
  let component: SupprimerNotePage;
  let fixture: ComponentFixture<SupprimerNotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupprimerNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
