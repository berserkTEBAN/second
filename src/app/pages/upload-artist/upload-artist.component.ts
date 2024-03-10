import { Component, OnInit } from '@angular/core';
import { typeGenre } from '../../models/genre';
import { Songs } from '../../models/songs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-upload-artist',
  templateUrl: './upload-artist.component.html',
  styleUrls: ['./upload-artist.component.css']
})
export class UploadArtistComponent implements OnInit {

   songs: Songs = this.userservice.newSong(); // Inicializar songs con un nuevo objeto de canción
   genres: typeGenre[] = [];
   savedSongs: Songs[] = [];
   
   constructor(private userservice: UsersService) {}

   ngOnInit(): void {
     this.genres = this.userservice.getGenres();
     this.getSavedSongs();
   }

   insertSong() {
     // Insertar una copia de this.songs, para mantener la referencia a la canción insertada
     const newSongCopy = { ...this.songs };
     this.userservice.insertSong(newSongCopy);
     this.songs = this.userservice.newSong(); // Reiniciar songs a un nuevo objeto de canción
   }

   getSavedSongs() {
     this.userservice.getSongs().subscribe(songs => {
       this.savedSongs = songs;
     });
   }
}
