import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../../services/apicliente.service';
import { Response } from '../../models/response';
import { Cliente } from 'src/app/models/cliente';

import { Select, Store } from '@ngxs/store';
import { ClienteState } from 'src/app/store/cliente.state';
import { GetClientes  } from 'src/app/store/cliente.actions';
import { Observable, Subscription} from 'rxjs';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public lst!: Cliente[];

  @Select(ClienteState.getClientesList) clientes$?: Observable<Cliente[]>;
  @Select(ClienteState.areClientesLoaded) areClientesLoaded$?: Observable<boolean>;

  areClientesLoadedSub?: Subscription;
  clientesSub?: Subscription;

  constructor(private api: ApiclienteService, private store: Store) { 
  }

  ngOnInit(): void {
    //this.obtainClientes();
    this.areClientesLoadedSub = this.areClientesLoaded$?.pipe(
      tap((areClientesLoaded) => {
        if (!areClientesLoaded) {
          this.store.dispatch(new GetClientes)
        }
      })
    ).subscribe((value: Boolean) => {
      console.log('¿areClientesLoaded? :' + value)
    })

    this.clientesSub = this.clientes$?.subscribe((clintes: Cliente[]) => {
      this.lst = clintes
    })
  }

  // obtainClientes() {
  //   this.api.getClientes().subscribe ( (res: Response) => {
  //     //los clientes array vienen en la prop "data" de la Response que he tipado
  //     this.lst = res.data;
  //   })
  // }

}
