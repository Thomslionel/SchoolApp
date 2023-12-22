import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierNoteParStudentPage } from './modifier-note-par-student.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierNoteParStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierNoteParStudentPageRoutingModule {}
