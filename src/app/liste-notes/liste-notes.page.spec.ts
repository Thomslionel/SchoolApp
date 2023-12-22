import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeNotesPage } from './liste-notes.page';

describe('ListeNotesPage', () => {
  let component: ListeNotesPage;
  let fixture: ComponentFixture<ListeNotesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
