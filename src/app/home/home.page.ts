import { Component } from '@angular/core';
import { Student } from './modeleetudiant';

import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { EtudiantServiceService } from '../etudiant-service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  etudiants?: Student;
  nom?: String;
  prenom?: String;
  classe?: String;
  messageErreur?: String;

  /*
  * Constructeur :
    * AlertController pour la gestion de popup d'alerte
    * LoadingController pour le loading
    * NavController pour la navigation vers les pages suivantes
    * EtudiantServiceService pour le service
  */
  constructor(private alertCtrl: AlertController, private loadingCtrl: LoadingController, private navCtrl: NavController, private studentService: EtudiantServiceService) {

  }
  /*
  * customCounterFormatter :
      Fonction chargé de compter les caractères restants en fonction fonction de maxLength.
  */

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} caractères restant`;
  }

  /*
  * ajouterEtudiant :
      Ajouter un etudiant à la liste des etudiants.
      Check si le formulaire est vide et envoie une alerte au cas oui
      Sinon, ajoute l'etudiant grâce à this.studentService.addStudent(this.etudiants et génère un pop pour dire que tel etudiant est ajouté.
  */


  async ajouterEtudiant() {
    if (!this.nom || !this.prenom || !this.classe) {
      let alert = await this.alertCtrl.create({
        header: "Erreur",
        message: "Veuillez remplir tous les champs!!!",
        cssClass: 'my-custom-class'
      })
      alert.present();

      setTimeout(() => {
        alert.dismiss();
      }, 5000);
    } else {

      let students = await this.studentService.getStudents();

      let newId = students.length + 1;


      this.etudiants = {
        id: newId,
        nom: this.nom,
        prenom: this.prenom,
        classe: this.classe,
        note: [],
      };
      this.studentService.addStudent(this.etudiants);
      this.loadingCtrl.create({
        message: "Etudiant " + this.nom + " ajouté",
        cssClass: 'my-custom-class'
      }).then(loading => {
        loading.present();
        setTimeout(() => {
          loading.dismiss()
        }, 5000);
      })

      this.nom = '';
      this.prenom = '';
      this.classe = '';
    }
  }

  /*
 * listedesEtudiants :
     Navigation vers la page Liste des Etudiants
 */

  listedesEtudiants() {
    this.navCtrl.navigateForward("/list-etudiants");
  }
}


