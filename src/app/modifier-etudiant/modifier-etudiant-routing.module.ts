import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierEtudiantPage } from './modifier-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierEtudiantPageRoutingModule { }
