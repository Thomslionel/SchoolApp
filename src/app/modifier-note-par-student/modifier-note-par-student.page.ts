import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, AlertController } from '@ionic/angular';
import { EtudiantServiceService } from '../etudiant-service.service';
import { Student } from '../home/modeleetudiant';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../home/modelenote';

@Component({
  selector: 'app-modifier-note-par-student',
  templateUrl: './modifier-note-par-student.page.html',
  styleUrls: ['./modifier-note-par-student.page.scss'],
})
export class ModifierNoteParStudentPage implements OnInit {

  etudiants?: Student;
  nom?: String;
  prenom?: String;
  classe?: String;
  id?: Number;
  index?: number;
  messageErreur?: String;
  notesArray?: { mark: number | undefined, course: String | undefined, semestre: String | undefined }[];
  noteCourse?: String;
  noteMark?: number;
  noteSemestre?: String;
  notes?: Note[];





  constructor(private navCtrl: NavController, private route: ActivatedRoute, private router: Router, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private studentService: EtudiantServiceService) {
    this.notesArray = [];

  }

  ngOnInit() {
    this.etudiants = this.studentService.getCurrentStudent();
    this.nom = this.etudiants?.nom;
    this.prenom = this.etudiants?.prenom;
    this.classe = this.etudiants?.classe;
    this.id = this.etudiants?.id;
  }

  async modifierNote() {
    if (this.etudiants && this.etudiants.note) {
      this.studentService.updateNote(this.etudiants.id, this.etudiants.note);
      this.navCtrl.navigateForward("/modifier-note");
    }
  }



  async checkForm(): Promise<boolean> {
    if (this.notesArray) {
      for (let note of this.notesArray) {
        if (!note.mark || !note.course || !note.semestre) {
          let alert = await this.alertCtrl.create({
            header: "Erreur",
            message: "Veuillez remplir tous les champs!!!",
            cssClass: 'my-custom-class'
          });
          alert.present();
          setTimeout(() => {
            alert.dismiss();
          }, 5000);
          return false; // Le formulaire n'est pas valide
        }
      }
    }
    return true; // Le formulaire est valide
  }

  // async modifierNote() {
  //   // Attendre que checkForm() se termine
  //   this.notesArray = [];
  //   this.notesArray.push({
  //     mark: this.noteMark,
  //     course: this.noteCourse,
  //     semestre: this.noteSemestre
  //   });
  //   for (let note of this.notesArray) {
  //     console.log("Tableau de Array : Course" + note.course)
  //     console.log("Tableau de Array : Mark" + note.mark)
  //     console.log("Tableau de Array : Semestre" + note.semestre)
  //   }
  //   if (this.etudiants && this.notesArray) {
  //     this.studentService.updateNote(this.etudiants.id, this.notesArray);
  //     this.navCtrl.navigateForward("/modifier-note");
  //   }
  // }

}
