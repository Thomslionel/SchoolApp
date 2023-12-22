import { Component, OnInit } from '@angular/core';
import { Student } from '../home/modeleetudiant';
import { EtudiantServiceService } from '../etudiant-service.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-liste-notes',
  templateUrl: './liste-notes.page.html',
  styleUrls: ['./liste-notes.page.scss'],
})
export class ListeNotesPage implements OnInit {

  student: Student[] = [];

  moyenneGenerale?: number;
  moyenneSemestre1?: number;
  moyenneSemestre2?: number;

  constructor(private storage: Storage, private studentService: EtudiantServiceService, private loadingCtrl: LoadingController, private navCtrl: NavController) {

  }

  async ngOnInit() {
    this.student = [];
    this.student = await this.storage?.get('students');
  }

  /*for (let eleve of this.student) {
    console.log("Élève : ", eleve);
    console.log("ID : ", eleve.id);
    console.log("Nom : ", eleve.nom);
    console.log("Prénom : ", eleve.prenom);
    console.log("Classe : ", eleve.classe);
    if (eleve.note) {
      for (let note of eleve.note) {
        console.log("Note : ", note);
        // Ici, vous pouvez accéder à toutes les propriétés de note
      }
    }
  }*/



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


  modifier(students: Student) {
    if (students) {
      this.studentService.setCurrentStudent(students);
      this.navCtrl.navigateForward("/modifier-etudiant");
    }
  }

  acceuil() {

    this.navCtrl.navigateForward("/acceuil");
  }

  moyenneGeneralefonction(student: Student): number {
    this.moyenneGenerale = this.studentService.getAverage(student);

    if (Number.isNaN(this.moyenneGenerale)) {
      this.moyenneGenerale = 0;
      return parseFloat(this.moyenneGenerale.toFixed(3));
    }

    return parseFloat(this.moyenneGenerale.toFixed(3));
  }

  moyenneSemestre1founction(student: Student, semester: String): number {
    this.moyenneSemestre1 = this.studentService.getSemesterAverage(student, semester);
    if (Number.isNaN(this.moyenneSemestre1)) {
      this.moyenneSemestre1 = 0;
      return parseFloat(this.moyenneSemestre1.toFixed(3));
    }

    return parseFloat(this.moyenneSemestre1.toFixed(3));
  }

  moyenneSemestre2founction(student: Student, semester: String): number {
    this.moyenneSemestre2 = this.studentService.getSemesterAverage(student, semester);

    if (Number.isNaN(this.moyenneSemestre2)) {
      this.moyenneSemestre2 = 0;
      return parseFloat(this.moyenneSemestre2.toFixed(3));
    }
    return parseFloat(this.moyenneSemestre2.toFixed(3));
  }





}
