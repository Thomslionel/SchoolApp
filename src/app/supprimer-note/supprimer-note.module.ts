import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupprimerNotePageRoutingModule } from './supprimer-note-routing.module';

import { SupprimerNotePage } from './supprimer-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupprimerNotePageRoutingModule
  ],
  declarations: [SupprimerNotePage]
})
export class SupprimerNotePageModule {}
