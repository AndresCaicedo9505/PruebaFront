import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radicado',
  templateUrl: './radicado.component.html',
  styleUrls: ['./radicado.component.css']
})
export class RadicadoComponent implements OnInit {

  @Input()numero:number=-1
  constructor() { }

  ngOnInit(): void {
  }

}
