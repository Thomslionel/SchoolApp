import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeNotesPage } from './liste-notes.page';

const routes: Routes = [
  {
    path: '',
    component: ListeNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeNotesPageRoutingModule {}
