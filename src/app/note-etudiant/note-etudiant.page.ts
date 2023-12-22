import { Component, OnInit } from '@angular/core';
import { Student } from '../home/modeleetudiant';
import { Router } from '@angular/router';
import { EtudiantServiceService } from '../etudiant-service.service';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Note } from '../home/modelenote';

@Component({
  selector: 'app-note-etudiant',
  templateUrl: './note-etudiant.page.html',
  styleUrls: ['./note-etudiant.page.scss'],
})
export class NoteEtudiantPage implements OnInit {

  student: Student[];

  constructor(private studentService: EtudiantServiceService, private loadingCtrl: LoadingController, private navCtrl: NavController, private alertCtrl: AlertController) {
    this.student = [];
  }

  async ngOnInit() {
    //await this.studentService.loadStudents();
    this.student = await this.studentService.getStudents();

  }


  acceuil() {
    this.navCtrl.navigateForward("/acceuil");
  }



  async attribuerdesNotes(students: Student) {
    const alert = await this.alertCtrl.create({
      header: 'Remplir les notes',
      inputs: [
        {
          name: 'nombreDeNotes',
          type: 'number',
          placeholder: 'Combien de notes avez-vous à remplir?'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Opération annulée');
          }
        }, {
          text: 'Ok',
          handler: (data) => {

            this.studentService.setData(data.nombreDeNotes);
            console.log("Ceci est data : " + data.nombreDeNotes);
            if (students) {
              this.studentService.setCurrentStudent(students);
              this.navCtrl.navigateForward("/note-par-etudiant");

            }

          }
        }
      ]
    });

    await alert.present();
  }



}
