import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierEtudiantPage } from './modifier-etudiant.page';

describe('ModifierEtudiantPage', () => {
  let component: ModifierEtudiantPage;
  let fixture: ComponentFixture<ModifierEtudiantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierEtudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
