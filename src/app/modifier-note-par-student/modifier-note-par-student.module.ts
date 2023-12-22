import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierNoteParStudentPageRoutingModule } from './modifier-note-par-student-routing.module';

import { ModifierNoteParStudentPage } from './modifier-note-par-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierNoteParStudentPageRoutingModule
  ],
  declarations: [ModifierNoteParStudentPage]
})
export class ModifierNoteParStudentPageModule {}
