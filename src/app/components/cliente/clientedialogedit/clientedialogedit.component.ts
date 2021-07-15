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

  @Input() indexito?: number;
  @Input() name: string;

  public displayPosition?: boolean;

  public position?: string;

  constructor(public service: ApiclienteService, public clienteC: ClienteComponent) { 
    this.name = '';
  }

  ngOnInit(): void {
    
  }

  showPositionDialog(position: string) {
      this.position = position;
      this.displayPosition = true;
      console.log('indice que llega a dialog Edit es ' + this.indexito);
      let c: Cliente = { id: this.indexito, nombre: this.name};
      this.service.editCliente(c).subscribe( res => {
        if (res.exito === 1) {
          window.alert('cliente editado')
      }
      this.clienteC.obtainClientes();
    })
  }

  editClient() {
    let c: Cliente = { id: this.indexito, nombre: this.name};
    this.service.editCliente(c).subscribe( res => {
      if (res.exito === 1) {
        window.alert('cliente editado')
      }
      this.clienteC.obtainClientes();
    })
  }

}
