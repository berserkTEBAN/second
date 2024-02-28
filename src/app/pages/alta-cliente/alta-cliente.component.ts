import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { TipoCliente } from '../../models/tipo_cliente';
import { ClienteService } from '../../services/cliente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  clienteSeleccionado: Cliente | null = null;
  cliente: Cliente = {} as Cliente;
  tipos: TipoCliente[] = [];
  edicion: boolean = false;
  clientes$: Observable<Cliente[]>;

  constructor(private clienteService: ClienteService) {
    this.clientes$ = new Observable<Cliente[]>();
  }

  ngOnInit(): void {
    this.clientes$ = this.clienteService.getClientes();
    this.tipos = this.clienteService.getTipos();
  }

  insertarEditarCliente() {
    if (this.edicion) {
      this.clienteService.updateCliente(this.cliente);
    } else {
      this.clienteService.agregarCliente(this.cliente);
    }
    this.limpiarFormulario();
  }

  editarCliente(cliente: Cliente) {
    this.cliente = cliente;
    this.edicion = true;
  }

  eliminarCliente(cliente: Cliente) {
    this.clienteService.eliminarCliente(cliente);
    this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.cliente = {} as Cliente;
    this.edicion = false;
  }
}
