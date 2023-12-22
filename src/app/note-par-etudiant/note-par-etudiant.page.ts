import { Component, OnInit } from '@angular/core';
import { Student } from '../home/modeleetudiant';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantServiceService } from '../etudiant-service.service';
import { Note } from '../home/modelenote';

@Component({
  selector: 'app-note-par-etudiant',
  templateUrl: './note-par-etudiant.page.html',
  styleUrls: ['./note-par-etudiant.page.scss'],
})
export class NoteParEtudiantPage implements OnInit {

  etudiants?: Student;
  nom?: String;
  prenom?: String;
  classe?: String;
  id?: Number;
  messageErreur?: String;
  private nbre?: Number;
  notesArray?: { mark: number, course: string, semestre: string }[];
  noteFinal?: Note[];




  constructor(private navCtrl: NavController, private route: ActivatedRoute, private router: Router, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private studentService: EtudiantServiceService) {

  }

  ngOnInit() {
    this.etudiants = this.studentService.getCurrentStudent();
    this.nbre = this.studentService.getData();
    this.nbre = Number(this.nbre);
    this.nom = this.etudiants?.nom;
    this.prenom = this.etudiants?.prenom;
    this.classe = this.etudiants?.classe;
    this.id = this.etudiants?.id;
    this.noteFinal = this.etudiants?.note;
    this.notesArray = Array(this.nbre).fill(0).map((x, i) => ({ mark: 0, course: '', semestre: '' }));
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

  async ajouterNote() {
    if (await this.checkForm()) { // Attendre que checkForm() se termine
      if (this.notesArray && this.etudiants) {
        for (let note of this.notesArray) {
          this.noteFinal?.push(note);
          if (this.noteFinal) {
            this.studentService.updateNote(this.etudiants.id, this.noteFinal);
            this.navCtrl.navigateForward("/note-etudiant");
          }
        }
      }
    }
  }


  acceuil() {

    this.navCtrl.navigateForward("/acceuil");
  }

}
