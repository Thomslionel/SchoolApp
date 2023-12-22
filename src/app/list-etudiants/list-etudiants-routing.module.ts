import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEtudiantsPage } from './list-etudiants.page';

const routes: Routes = [
  {
    path: '',
    component: ListEtudiantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListEtudiantsPageRoutingModule {}
