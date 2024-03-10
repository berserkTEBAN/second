import { Component,OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { LibroService} from '../../services/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {

  //propiedades
  libros:Libro[]=[];
  libro=new Libro();

  constructor (private libroService:LibroService){}

  //oninit en cuanto el componente cargue

  ngOnInit(): void {
    this.libroService.getLibros().subscribe(data => {
      this.libros = data.map(doc => {
        return {
          ...doc.payload.doc.data() as Libro,
          id: doc.payload.doc.id
        };
      });
    });

   
  }

   //metodo para insertar un libro
   insertarLibro(){
    this.libroService.createLibro(this.libro);
    this.libro=new Libro();
    
  }

  //metodo para seleccionar un libro en la tabla
  
  selectLibro(libroSeleccionado:Libro){
    this.libro=libroSeleccionado;
  }
 
  //metodo actualizar un libro
  updateLibro(){
    this.libroService.updateLibro(this.libro);
    this.libro=new Libro();
  }

  //método para eliminar un libro

  deleteLibro(id:string){
    this.libroService.deleteLibro(id);
    this.libro=new Libro();
  }
}
