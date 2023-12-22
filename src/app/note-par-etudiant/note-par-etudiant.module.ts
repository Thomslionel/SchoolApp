import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteParEtudiantPageRoutingModule } from './note-par-etudiant-routing.module';

import { NoteParEtudiantPage } from './note-par-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteParEtudiantPageRoutingModule
  ],
  declarations: [NoteParEtudiantPage]
})
export class NoteParEtudiantPageModule {}
