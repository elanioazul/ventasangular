import { Cliente } from './cliente'
export interface Response {
  exito: number,
  mensaje: string,
  data: Cliente[]
}