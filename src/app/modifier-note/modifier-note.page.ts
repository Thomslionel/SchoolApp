import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { EtudiantServiceService } from '../etudiant-service.service';
import { Student } from '../home/modeleetudiant';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-modifier-note',
  templateUrl: './modifier-note.page.html',
  styleUrls: ['./modifier-note.page.scss'],
})
export class ModifierNotePage implements OnInit {

  student: Student[];

  /*
 * Constructeur :
   * AlertController pour la gestion de popup d'alerte
   * LoadingController pour le loading
   * NavController pour la navigation vers les pages suivantes
   * EtudiantServiceService pour le service
 */


  constructor(private studentService: EtudiantServiceService, private loadingCtrl: LoadingController, private navCtrl: NavController, private alertCtrl: AlertController, private storage: Storage) {
    this.student = [];

  }

  /*
 * ngOnInit :
   * await pour le chargement de des données.
   * recupère le contenu de la base de données et la met dans student.
 */

  async ngOnInit() {
    //await this.studentService.loadStudents();
    this.student = await this.storage?.get('students');

  }

  /*
    * supprimerEtudiant :
      * verifie le contenu de student et renvoie un index différents de -1
      * Par la suite deleteStudent
  */

  async supprimerNote(etudiant: Student) {
    const indexx = this.student.indexOf(etudiant);
    if (indexx > -1) {
      const alert = await this.alertCtrl.create({
        header: 'Remplir les notes',
        message: "Voulez vous supprimez toutes les Notes de " + etudiant.nom + "?",
        buttons: [
          {
            text: 'Non',
            cssClass: 'secondary',
            handler: () => {
              this.navCtrl.navigateForward("/supprimer-note");
            }
          }, {
            text: 'Oui',
            handler: () => {
              this.loadingCtrl.create({
                message: "Note de l'Etudiant " + etudiant.nom + " Supprimé",
                cssClass: 'my-custom-class'
              }).then(loading => {
                loading.present();
                setTimeout(() => {
                  loading.dismiss()
                }, 5000);
              })
              this.studentService.deleteNoteAll(etudiant);
            }
          }
        ]
      });

      await alert.present();
    }
  }

  /*
    * modifier :
      * Recupère l'etudiant concerné et par la suite envoie cela aux service qui est charger de modifier les valeurs de l'etudiant..
  */

  modifier(students: Student) {
    if (students) {
      this.studentService.setCurrentStudent(students);
      this.navCtrl.navigateForward("/modifier-note-par-student");
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
