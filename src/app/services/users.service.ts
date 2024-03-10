import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Songs } from '../models/songs';
import { typeGenre } from '../models/genre';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private songsCollection: AngularFirestoreCollection<Songs>;
  private genres: typeGenre[] = [];

  constructor(private firestore: AngularFirestore) {
    this.songsCollection = this.firestore.collection<Songs>('songs');
    this.genres = [
      // Definir los géneros aquí...
    ];
  }

  getSongs(): Observable<Songs[]> {
    return this.songsCollection.valueChanges({ idField: 'id' });
  }

  getGenres(): typeGenre[] {
    return this.genres;
  }

  insertSong(song: Songs): void {
    this.songsCollection.add(song);
  }

  updateSong(song: Songs): void {
    const songDoc = this.songsCollection.doc(song.id);
    songDoc.update(song);
  }
  

 

  deleteSong(songId: string): void {
    const songDoc = this.songsCollection.doc(songId);
    songDoc.delete();
  }

  newSong(): Songs {
    return {
      id: '', // Se asignará un ID vacío que será generado por Firestore
      album: "",
      artist: "",
      genre: 0,
      title: "",
      releaseYear: 0,
      description: ""
    };
  }
}
