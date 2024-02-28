import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { TipoCliente } from '../models/tipo_cliente';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientesCollection: AngularFirestoreCollection<Cliente>;
  clientes: Observable<Cliente[]>;
  private tipos: TipoCliente[] = [];

  constructor(private readonly firestore: AngularFirestore) {
    this.clientesCollection = this.firestore.collection<Cliente>('clientes');
    this.clientes = this.clientesCollection.valueChanges({ idField: 'id' });
    this.tipos = [
      {
        id: 0,
        descripcion: 'sin definir'
      },
      {
        id: 1,
        descripcion: 'clientes Activos'
      },
      {
        id: 2,
        descripcion: 'clientes Inactivos'
      },
      {
        id: 3,
        descripcion: 'clientes Deudores'
      }
    ];
  }

  // Método que retorna los clientes desde Firebase
  getClientes(): Observable<Cliente[]> {
    return this.clientes;
  }

  // Método que retorna los tipos de clientes
  getTipos(): TipoCliente[] {
    return this.tipos;
  }

  // Método para agregar un cliente a Firebase
  agregarCliente(cliente: Cliente) {
    this.clientesCollection.add(cliente);
  }

  // Método para actualizar un cliente en Firebase
  updateCliente(cliente: Cliente) {
    const clienteDoc = this.clientesCollection.doc(cliente.id);
    clienteDoc.update(cliente);
  }

  // Método para eliminar un cliente de Firebase
  eliminarCliente(cliente: Cliente) {
    const clienteDoc = this.clientesCollection.doc(cliente.id);
    clienteDoc.delete();
  }

  // Método que inicializa un cliente nuevo
  nuevoCliente(): Cliente {
    return {
      id: this.firestore.createId(), // Generar un ID único usando el método createId() de AngularFirestore
      nombre: '',
      rfc: '',
      domicilio: '',
      tipoCliente: 0,
    };
  }
}
