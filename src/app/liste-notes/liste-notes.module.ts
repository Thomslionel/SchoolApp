import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeNotesPageRoutingModule } from './liste-notes-routing.module';

import { ListeNotesPage } from './liste-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeNotesPageRoutingModule
  ],
  declarations: [ListeNotesPage]
})
export class ListeNotesPageModule {}
