import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupprimerNotePage } from './supprimer-note.page';

const routes: Routes = [
  {
    path: '',
    component: SupprimerNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupprimerNotePageRoutingModule {}
