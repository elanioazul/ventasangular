import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clientedialogedit',
  templateUrl: './clientedialogedit.component.html',
  styleUrls: ['./clientedialogedit.component.scss']
})
export class ClientedialogeditComponent implements OnInit {

  @Input() indexito?: number;
  @Input() name?: string;

  public displayPosition?: boolean;

  public position?: string;

  constructor() { }

  ngOnInit(): void {
    
  }

  showPositionDialog(position: string) {
      this.position = position;
      this.displayPosition = true;
      console.log('indice que llega a dialog Edit es ' + this.indexito)
  }

}
