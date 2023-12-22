import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'acceuil',
  //   pathMatch: 'full'
  // },
  {
    path: 'list-etudiants',
    loadChildren: () => import('./list-etudiants/list-etudiants.module').then(m => m.ListEtudiantsPageModule)
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./acceuil/acceuil.module').then(m => m.AcceuilPageModule)
  },
  {
    path: 'modifier-etudiant',
    loadChildren: () => import('./modifier-etudiant/modifier-etudiant.module').then(m => m.ModifierEtudiantPageModule)
  },
  {
    path: 'note-etudiant',
    loadChildren: () => import('./note-etudiant/note-etudiant.module').then(m => m.NoteEtudiantPageModule)
  },
  {
    path: 'note-par-etudiant',
    loadChildren: () => import('./note-par-etudiant/note-par-etudiant.module').then(m => m.NoteParEtudiantPageModule)
  },
  {
    path: 'liste-notes',
    loadChildren: () => import('./liste-notes/liste-notes.module').then(m => m.ListeNotesPageModule)
  },
  {
    path: 'modifier-note',
    loadChildren: () => import('./modifier-note/modifier-note.module').then(m => m.ModifierNotePageModule)
  },
  {
    path: 'supprimer-note',
    loadChildren: () => import('./supprimer-note/supprimer-note.module').then(m => m.SupprimerNotePageModule)
  },
  {
    path: 'modifier-note-par-student',
    loadChildren: () => import('./modifier-note-par-student/modifier-note-par-student.module').then(m => m.ModifierNoteParStudentPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then(m => m.SplashScreenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
