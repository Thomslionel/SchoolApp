import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteParEtudiantPage } from './note-par-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: NoteParEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteParEtudiantPageRoutingModule {}
