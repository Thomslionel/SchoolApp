import { Component, OnInit, SimpleChanges } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { EtudiantServiceService } from '../etudiant-service.service';
import { Student } from '../home/modeleetudiant';
import { Note } from '../home/modelenote';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-supprimer-note',
  templateUrl: './supprimer-note.page.html',
  styleUrls: ['./supprimer-note.page.scss'],
})
export class SupprimerNotePage implements OnInit {

  student: Student[] = [];

  constructor(private storage: Storage, private studentService: EtudiantServiceService, private loadingCtrl: LoadingController, private navCtrl: NavController, private router: Router) {

  }

  async ngOnInit() {
    this.student = [];
    this.student = await this.storage?.get('students');
  }




  supression(etudiant: Student, note: Note) {

    const index = this.student.indexOf(etudiant);
    if (index > -1) {
      this.loadingCtrl.create({
        message: "Note de  " + note.course + " Supprimé",
        cssClass: 'my-custom-class'
      }).then(loading => {
        loading.present();
        setTimeout(() => {
          loading.dismiss()
        }, 5000);
      })
      this.studentService.deleteNoteOne(etudiant, note);
    }

  }


}
