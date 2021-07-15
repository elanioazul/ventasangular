import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ApiclienteService } from '../../../services/apicliente.service';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-clientedialog',
  templateUrl: './clientedialog.component.html',
  styleUrls: ['./clientedialog.component.scss']
})
export class ClientedialogComponent implements OnInit {

  display: boolean = false;
  public clienteName: string;

  constructor(public service: ApiclienteService) { 
    this.clienteName = ''
  }

  ngOnInit(){
  }

  showDialog() {
    this.display = true;
  }

  addClient() {
    let c: Cliente = { nombre: this.clienteName};
    this.service.addCliente(c).subscribe( res => {
      if (res.exito === 1) {
        window.alert('cliente insertado')
      }
    })
  }


}
