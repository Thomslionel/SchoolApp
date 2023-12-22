import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEtudiantsPageRoutingModule } from './list-etudiants-routing.module';

import { ListEtudiantsPage } from './list-etudiants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEtudiantsPageRoutingModule
  ],
  declarations: [ListEtudiantsPage]
})
export class ListEtudiantsPageModule {}
