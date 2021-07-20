import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ApiclienteService } from '../../../services/apicliente.service';

import { ClienteComponent } from '../cliente.component';

import { Select, Store } from '@ngxs/store';
import { ClienteState } from 'src/app/store/cliente.state';
import { AddCliente, GetClientes  } from 'src/app/store/cliente.actions';
import { Observable, Subscription} from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-clientedialog',
  templateUrl: './clientedialog.component.html',
  styleUrls: ['./clientedialog.component.scss']
})
export class ClientedialogComponent implements OnInit {

  public display: boolean = false;
  public nombre: string;

  constructor(public service: ApiclienteService, public store: Store, public c: ClienteComponent) { 
    this.nombre = ''
  }

  ngOnInit(){
  }

  showDialog() {
    this.display = true;
  }

  addClient() {
    let c: Cliente = { nombre: this.nombre, id : 0};
    this.store.dispatch(new AddCliente(c));
    this.store.dispatch(new GetClientes());
    this.display = false;

    // this.service.addCliente(c).subscribe( res => {
    //   if (res.exito === 1) {
    //     window.alert('cliente insertado')
    //   }
    //   this.clienteC.clientesSub;
    // })
  }

  closeDialog() {
    this.display = false
  }


}
