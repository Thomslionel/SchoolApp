import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierNotePageRoutingModule } from './modifier-note-routing.module';

import { ModifierNotePage } from './modifier-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierNotePageRoutingModule
  ],
  declarations: [ModifierNotePage]
})
export class ModifierNotePageModule {}
