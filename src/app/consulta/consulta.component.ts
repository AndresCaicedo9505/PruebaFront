import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComunicacionService } from '../services/comunicacion/comunicacion.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor(private serviceComunicacion:ComunicacionService) { }

  ngOnInit(): void {
  }

  option=""
  correo=""
  Documento=""
  Nombre=""
  peticion=""
  resultado=false
  respuesta=""
  reclamo=false
  id=""

  pqrFormGruop = new FormGroup({
    idPqr: new FormControl('', [Validators.required]),
  });

  onSubmit(){
    console.log("llamo")
    this.serviceComunicacion.getPqe(this.pqrFormGruop.get("idPqr")!.value).subscribe(data =>{
      this.option=data.objetoResponse.tipoPqr
      this.correo=data.objetoResponse.correo
      this.Documento=data.objetoResponse.documento
      this.Nombre=data.objetoResponse.nombreCompleto
      this.peticion=data.objetoResponse.peticion
      this.resultado=true
      this.respuesta = data.objetoResponse.repuesta
      this.reclamo=data.bandera
      this.id=data.objetoResponse.id
    })
  }

}
