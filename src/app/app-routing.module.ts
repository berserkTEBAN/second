import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaClienteComponent } from './pages/alta-cliente/alta-cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { LibrosComponent } from './pages/libros/libros.component'; // Importa LibrosComponent aquí
import { SongsComponent } from './pages/list/songs.component';
import { UploadArtistComponent } from './pages/upload-artist/upload-artist.component';
import { PrimerComponent } from './pages/primer/primer.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'alta-cliente', component: AltaClienteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'libros', component: LibrosComponent }, // Agrega la ruta para LibrosComponent aquí
  { path: 'songs', component: PrimerComponent}, 
  { path: 'about', component: AboutComponent}, 
  // Otras rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
