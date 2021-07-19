import {Cliente} from '../models/cliente';

export class AddCliente {
  static readonly type = '[Cliente ] Add';
  constructor(public payload: Cliente) {}
}

export class GetClientes {
  static readonly type = '[Cliente] Get'
}

export class UpdateCliente {
  static readonly type = '[Cliente] Update';

  constructor(public payload: Cliente) {}
}

export class DeleteCliente {
  static readonly type = '[Cliente] Delete';

  constructor(public id: number) {}
}