import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ApiclienteService } from '../../../services/apicliente.service';
import {ClienteComponent} from '../cliente.component';
@Component({
  selector: 'app-clientedialogdelete',
  templateUrl: './clientedialogdelete.component.html',
  styleUrls: ['./clientedialogdelete.component.scss']
})
export class ClientedialogdeleteComponent implements OnInit {

  @Input() inputCliente: any;
  public clienteToManage?: Cliente;
  public id?: number;

  public display: boolean = false;

  constructor(public service: ApiclienteService, public clienteC: ClienteComponent) { }

  ngOnInit(): void {
    if (this.inputCliente !== undefined) {
      this.clienteToManage = this.inputCliente;
      this.id = this.inputCliente.id;
    } else {
      this.clienteToManage = undefined;
      
    }
  }

  showDialog() {
    this.display = true;
  }

  deleteCliente() {
    if (this.clienteToManage !== undefined && this.id !== undefined) {
      this.service.deleteCliente(this.id).subscribe( res => {
        if (res.exito === 1) {
          window.alert('cliente Borrado')
        }
        this.clienteC.obtainClientes();
      })
    }
  }



}
