import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteEtudiantPageRoutingModule } from './note-etudiant-routing.module';

import { NoteEtudiantPage } from './note-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteEtudiantPageRoutingModule
  ],
  declarations: [NoteEtudiantPage]
})
export class NoteEtudiantPageModule {}
