import { Component, OnInit } from '@angular/core';
import { Student } from '../home/modeleetudiant';
import { Router } from '@angular/router';
import { EtudiantServiceService } from '../etudiant-service.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Note } from '../home/modelenote';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.page.html',
  styleUrls: ['./list-etudiants.page.scss'],
})
export class ListEtudiantsPage implements OnInit {

  student: Student[] = [];

  /*
 * Constructeur :
   * AlertController pour la gestion de popup d'alerte
   * LoadingController pour le loading
   * NavController pour la navigation vers les pages suivantes
   * EtudiantServiceService pour le service
 */


  constructor(private storage: Storage, private studentService: EtudiantServiceService, private loadingCtrl: LoadingController, private navCtrl: NavController) {
    this.student = [];
  }

  /*
 * ngOnInit :
   * await pour le chargement de des données.
   * recupère le contenu de la base de données et la met dans student.
 */

  async ngOnInit() {
    this.student = this.studentService.getStudents()
  }

  /*
    * supprimerEtudiant :
      * verifie le contenu de student et renvoie un index différents de -1
      * Par la suite deleteStudent
  */

  async supprimerEtudiant(etudiant: Student) {
    const index = this.student.indexOf(etudiant);
    if (index > -1) {
      this.loadingCtrl.create({
        message: "Etudiant " + etudiant.nom + " Supprimé",
        cssClass: 'my-custom-class'
      }).then(loading => {
        loading.present();
        setTimeout(() => {
          loading.dismiss()
        }, 5000);
      })
      this.studentService.deleteStudent(etudiant);
    }
  }

  /*
    * modifier :
      * Recupère l'etudiant concerné et par la suite envoie cela aux service qui est charger de modifier les valeurs de l'etudiant..
  */

  modifier(students: Student) {
    if (students) {
      this.studentService.setCurrentStudent(students);
      this.navCtrl.navigateForward("/modifier-etudiant");
    }
  }

  /*
  * acceuil :
    * Navig vers la page acceuil.
*/

  acceuil() {

    this.navCtrl.navigateForward("/acceuil");
  }

}

