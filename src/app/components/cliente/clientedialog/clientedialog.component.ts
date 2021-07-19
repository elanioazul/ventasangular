import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ApiclienteService } from '../../../services/apicliente.service';
import {ClienteComponent} from '../cliente.component';

@Component({
  selector: 'app-clientedialog',
  templateUrl: './clientedialog.component.html',
  styleUrls: ['./clientedialog.component.scss']
})
export class ClientedialogComponent implements OnInit {

  public display: boolean = false;
  public nombre: string;

  constructor(public service: ApiclienteService, public clienteC: ClienteComponent) { 
    this.nombre = ''
  }

  ngOnInit(){
  }

  showDialog() {
    this.display = true;
  }

  addClient() {
    let c: Cliente = { nombre: this.nombre, id : 0};
    this.service.addCliente(c).subscribe( res => {
      if (res.nombre) {
        window.alert('cliente insertado')
      }
      this.clienteC.obtainClientes();
    })
  }


}
