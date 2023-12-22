import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Student } from './home/modeleetudiant';
import { Note } from './home/modelenote';

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {
  private storage: Storage | null = null;
  students: Student[];
  currentStudent?: Student; // Ajout d'une propriété pour stocker l'étudiant actuel
  total: number;
  private data: number;

  constructor(private storageService: Storage) {
    this.init();
    this.students = [];
    this.data = 0;
    this.total = 0;
  }

  async init() {
    const storage = await this.storageService.create();
    this.storage = storage;
    this.loadStudents();
  }

  async loadStudents() {
    const students = await this.storage?.get('students');
    if (students) {
      this.students = students;
    }
  }

  deleteStudent(etudiant: Student) {
    const index = this.students.findIndex(student => student.id === etudiant.id);
    if (index !== -1) {
      this.students.splice(index, 1);
      this.storage?.set('students', this.students);
    }
  }

  deleteNoteAll(etudiant: Student) {
    const index = this.students.findIndex(student => student.id === etudiant.id);
    if (index !== -1) {
      for (let note of this.students[index].note) {
        this.students[index].note = [];
        this.storage?.set('students', this.students);
      }
    }
  }

  deleteNoteOne(student: Student, note: Note) {
    const index = this.students.findIndex(student => student.id === student.id);
    if (index !== -1) {
      const indexNote = student.note.findIndex(nodeId => nodeId.idNote == note.idNote);
      if (indexNote !== -1) {
        student.note.splice(indexNote, 1);
        this.updateStudent(student);
      }
    }
  }

  addStudent(student: Student) {
    student.id = this.students.length + 1;
    this.students.push(student);
    this.storage?.set('students', this.students);
  }

  /* {

    for (let eleve in this.students) {
      console.log("log de get dans service " + eleve);
    }
    return this.students;
  }*/


  getStudents(): Student[] {
    return this.students;
  }

  setCurrentStudent(student: Student) {
    this.currentStudent = student;

    localStorage.setItem('currentStudent', JSON.stringify(student));
  }

  getCurrentStudent(): Student | undefined {
    const student = localStorage.getItem('currentStudent');
    if (student) {
      this.currentStudent = JSON.parse(student);
    }

    return this.currentStudent;
  }


  updateStudent(updatedStudent: Student) {
    const index = this.students.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
      this.storage?.set('students', this.students);
    }
  }


  updateNote(studentId: Number | undefined, newNotes: Note[]) {

    const student = this.students.find(s => s.id === studentId);

    if (student) {
      student.note = newNotes;

      this.storage?.set('students', this.students);
    } else {
      console.log(`Erreur : aucun étudiant trouvé avec l'ID ${studentId}`);
    }
  }


  clearCurrentStudent() {
    this.currentStudent = undefined;
    localStorage.removeItem('currentStudent');
  }





  setData(data: number) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  getAverage(student: Student): number {
    let moyenne = 0;
    let totalmoyenne = 0;

    for (let note of student.note) {
      if (note.mark) {
        totalmoyenne += note.mark;
      }

    }
    moyenne = totalmoyenne / student.note.length;
    return moyenne;
  }

  getSemesterAverage(student: Student, semester: String): number {
    let moyenne = 0;
    let totalNombre = 0;
    let count = 0;
    for (let note of student.note) {
      if (note.semestre === semester) {
        if (note.mark) {
          totalNombre += note.mark;
          count++;
        }
      }
    }
    moyenne = totalNombre / count;
    return moyenne;
  }


}
