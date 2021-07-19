import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ApiclienteService } from '../../../services/apicliente.service';
import {ClienteComponent} from '../cliente.component';
@Component({
  selector: 'app-clientedialogedit',
  templateUrl: './clientedialogedit.component.html',
  styleUrls: ['./clientedialogedit.component.scss']
})
export class ClientedialogeditComponent implements OnInit {

  @Input() inputCliente: any;
  public clienteToManage?: Cliente;
  public nombre?: string;

  public display: boolean = false;


  constructor(public service: ApiclienteService, public clienteC: ClienteComponent) { 
  }

  ngOnInit(): void {
    if (this.inputCliente !== undefined) {
      this.clienteToManage = this.inputCliente;
      this.nombre = this.inputCliente.nombre;
    } else {
      this.clienteToManage = undefined;
      
    }
    
  }

  showDialog() {
    this.display = true;
  }

  editClient() {
    if (this.clienteToManage !== undefined && this.nombre !== undefined) {
      let c: Cliente = { id: this.clienteToManage.id, nombre: this.nombre};
      this.service.editCliente(c).subscribe( res => {
        if (res.nombre) {
          window.alert('cliente Editado')
        }
        this.clienteC.obtainClientes();
      })
    }
  }

}
