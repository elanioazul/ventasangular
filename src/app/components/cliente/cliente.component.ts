import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../../services/apicliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(private api: ApiclienteService) { 
    this.api.getClientes().subscribe ( res => {
      console.log(res)
    })
  }

  ngOnInit(): void {
  }

}
