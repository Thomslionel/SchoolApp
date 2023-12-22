import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierNotePage } from './modifier-note.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierNotePageRoutingModule {}
