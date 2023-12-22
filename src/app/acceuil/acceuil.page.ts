import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { EtudiantServiceService } from '../etudiant-service.service';
import { Student } from '../home/modeleetudiant';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  student: Student[];

  /*
 * Constructeur :
   * AlertController pour la gestion de popup d'alerte
   * LoadingController pour le loading
   * NavController pour la navigation vers les pages suivantes
   * EtudiantServiceService pour le service
 */


  constructor(private studentService: EtudiantServiceService, private loadingCtrl: LoadingController, private navCtrl: NavController) {
    this.student = [];

  }

  /*
 * ngOnInit :
   * await pour le chargement de des données.
   * recupère le contenu de la base de données et la met dans student.
 */

  async ngOnInit() {
    //await this.studentService.loadStudents();
    this.student = await this.studentService.getStudents();

  }

  pagelisteNote() {

    this.navCtrl.navigateForward("/liste-notes");

  }

}
