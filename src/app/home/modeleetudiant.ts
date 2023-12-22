import { Note } from "./modelenote";

export interface Student {
  id?: Number;
  nom: String;
  prenom: String;
  classe: String;
  note: Note[];
}
