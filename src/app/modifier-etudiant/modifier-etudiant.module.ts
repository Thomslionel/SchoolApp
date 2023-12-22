import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierEtudiantPageRoutingModule } from './modifier-etudiant-routing.module';

import { ModifierEtudiantPage } from './modifier-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierEtudiantPageRoutingModule
  ],
  declarations: [ModifierEtudiantPage]
})
export class ModifierEtudiantPageModule {}
