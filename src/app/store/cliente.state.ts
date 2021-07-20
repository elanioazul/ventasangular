import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddCliente, GetClientes, UpdateCliente, DeleteCliente} from './cliente.actions';
import { Cliente } from '../models/cliente';
import { ApiclienteService } from '../services/apicliente.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { patch } from '@ngxs/store/operators';

export class ClienteStateModel {
  clientes: Cliente[];
  areClientesLoaded?: boolean
  constructor(){
    this.clientes = [];
  }
}

const initialClienteState: ClienteStateModel = {
	clientes: [],
	areClientesLoaded: false
};

@State<ClienteStateModel>({
    name: 'clientes',
    defaults: initialClienteState
})

@Injectable()
export class ClienteState {

  constructor(private clientesS: ApiclienteService, private router: Router ) {
  }

  @Selector()
  static getClientesList(state: ClienteStateModel) {
    return state.clientes;
  }

  @Selector()
  static areClientesLoaded(state: ClienteStateModel) {
    return state.areClientesLoaded;
  }

  @Action(GetClientes)
  getClientes({getState, setState}: StateContext<ClienteStateModel>) {
    return this.clientesS.getClientes().pipe(
      tap(result => {
        const state = getState();
        setState({
          ...state,
          clientes: result.data,
          areClientesLoaded: true
        })
      })
    )
  }

  @Action(DeleteCliente)
  deleteCliente({getState, setState}: StateContext<ClienteStateModel>, {id}: DeleteCliente) {
    return this.clientesS.deleteCliente(id).pipe(
      tap(result => {
        const state = getState();
        const filteredArray = state.clientes?.filter(item => item.id !== id);
        setState({
          ...state,
          clientes: filteredArray,
        })
      })
    )
  }

  @Action(UpdateCliente)
  updateCliente({getState, setState}: StateContext<ClienteStateModel>, {payload}: UpdateCliente) {
    return this.clientesS.editCliente(payload).pipe(
      tap(result => {
        const state = getState();
        const clienteList = [ ...state.clientes];
        const clienteIndex = clienteList.findIndex(item => item.id === payload.id);
        clienteList[clienteIndex].nombre = result.data[0].nombre;
        
        setState({
          ...state,
          clientes: clienteList
        })
      })
    )
  }

  @Action(AddCliente) 
  addCliente({getState, setState}: StateContext<ClienteStateModel>, {payload}: AddCliente) {
    return this.clientesS.addCliente(payload).pipe(
      tap(res => {
        const state = getState();
        setState(
          patch({
            clientes: [...state.clientes, res]
          })
        );
      })
    )
  }
}
