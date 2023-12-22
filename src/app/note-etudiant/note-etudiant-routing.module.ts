import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteEtudiantPage } from './note-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: NoteEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteEtudiantPageRoutingModule {}
