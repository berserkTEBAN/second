import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AltaClienteComponent } from './pages/alta-cliente/alta-cliente.component';
import { HomeComponent } from './pages/home/home.component'; 
import { LibrosComponent } from '../app/pages/libros/libros.component';
import { LibroService } from './services/libro.service'; // Importa LibroService aquí
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment.development';
import { SongsComponent } from './pages/list/songs.component';
import { UsersService } from './services/users.service';
import { UploadArtistComponent } from './pages/upload-artist/upload-artist.component';
import { PrimerComponent } from './pages/primer/primer.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaClienteComponent,
    HomeComponent,
    LibrosComponent,
    SongsComponent,
    UploadArtistComponent,
    PrimerComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    LibroService,
    UsersService // Agrega LibroService como un proveedor aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
