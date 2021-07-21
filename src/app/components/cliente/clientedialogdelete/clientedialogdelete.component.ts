import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ApiclienteService } from '../../../services/apicliente.service';
import {ClienteComponent} from '../cliente.component';

import { Select, Store } from '@ngxs/store';
import { ClienteState } from 'src/app/store/cliente.state';
import { DeleteCliente, GetClientes  } from 'src/app/store/cliente.actions';
import { Observable, Subscription} from 'rxjs';
import { tap } from 'rxjs/operators';

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

  constructor(public service: ApiclienteService, public store: Store) { }

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
      this.store.dispatch(new DeleteCliente(this.id));
      this.store.dispatch(new GetClientes());
      // this.service.deleteCliente(this.id).subscribe( res => {
      //   if (res.exito === 1) {
      //     window.alert('cliente Borrado')
      //   }
      //   this.clienteC.clientesSub;
      // })
    }
  }

  closeDialog() {
    this.display = false;
  }



}
