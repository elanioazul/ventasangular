import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clientedialogdelete',
  templateUrl: './clientedialogdelete.component.html',
  styleUrls: ['./clientedialogdelete.component.scss']
})
export class ClientedialogdeleteComponent implements OnInit {

  @Input() indexito?: number;

  public displayPosition?: boolean;

  public position?: string;

  constructor() { }

  ngOnInit(): void {
  }

  showPositionDialog(position: string) {
      this.position = position;
      this.displayPosition = true;
      console.log('indice que llega a dialog Delete es ' + this.indexito)
  }


}
