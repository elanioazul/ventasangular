import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../../services/apicliente.service';
import { Response } from '../../models/response';
import { Cliente } from 'src/app/models/cliente';
import {DialogModule} from 'primeng/dialog';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public lst!: Cliente[];



  constructor(private api: ApiclienteService, public d: DialogModule) { 
  }

  ngOnInit(): void {
    this.obtainClientes();
  }

  obtainClientes() {
    this.api.getClientes().subscribe ( (res: Response) => {
      //console.log(res)
      this.lst = res.data;
    })
  }

}
