import { Component, OnInit } from '@angular/core';
import { Student } from '../home/modeleetudiant';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { EtudiantServiceService } from '../etudiant-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-etudiant',
  templateUrl: './modifier-etudiant.page.html',
  styleUrls: ['./modifier-etudiant.page.scss'],
})
export class ModifierEtudiantPage {

  etudiants?: Student;
  nom?: String;
  prenom?: String;
  classe?: String;
  id?: Number;
  messageErreur?: String;




  constructor(private navCtrl: NavController, private route: ActivatedRoute, private router: Router, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private studentService: EtudiantServiceService) {

  }

  ngOnInit() {
    this.etudiants = this.studentService.getCurrentStudent();

    this.nom = this.etudiants?.nom;
    this.prenom = this.etudiants?.prenom;
    this.classe = this.etudiants?.classe;
    this.id = this.etudiants?.id;


  }


  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} caractères restant`;
  }

  async modifier() {
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
      this.etudiants = {
        id: this.id,
        nom: this.nom,
        prenom: this.prenom,
        classe: this.classe,
        note: [],
      };

      // Mise à jour des propriétés individuelles
      this.id = this.etudiants.id;
      this.nom = this.etudiants.nom;
      this.prenom = this.etudiants.prenom;
      this.classe = this.etudiants.classe;
      this.studentService.updateStudent(this.etudiants);

      this.loadingCtrl.create({
        message: "Etudiant " + this.nom + " modifier",
        cssClass: 'my-custom-class'
      }).then(loading => {
        loading.present();
        setTimeout(() => {
          loading.dismiss()
        }, 5000);
      })
      this.studentService.clearCurrentStudent();
      this.navCtrl.navigateForward("/list-etudiants");

    }


  }

  acceuil() {

    this.navCtrl.navigateForward("/acceuil");
  }
}
