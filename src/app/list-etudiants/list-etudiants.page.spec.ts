import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListEtudiantsPage } from './list-etudiants.page';

describe('ListEtudiantsPage', () => {
  let component: ListEtudiantsPage;
  let fixture: ComponentFixture<ListEtudiantsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListEtudiantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
