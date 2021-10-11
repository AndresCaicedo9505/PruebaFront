import { Component, Inject, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { ComunicacionService } from '../services/comunicacion/comunicacion.service';
import { PQR } from '../Util/model/PQR';
import {MatDialog} from '@angular/material/dialog';
import { RadicadoComponent } from '../radicado/radicado.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pqr',
  templateUrl: './pqr.component.html',
  styleUrls: ['./pqr.component.css']
})
export class PqrComponent implements OnInit {
  
  constructor(private serviceComunicacion:ComunicacionService,public dialog: MatDialog,private route: ActivatedRoute ) { }

  pqrFormGruop = new FormGroup({
    pqrForm: new FormControl('', [Validators.required]),
    emailFormControl: new FormControl('', [ Validators.required]),
    documento: new FormControl('', [ Validators.required]),
    nombre: new FormControl('', [ Validators.required]),
    peticion: new FormControl('', [ Validators.required])
  });
  options =["Petición","Queja"];
  opcionIn:number=-1;
  opcion=""
  sub:any;

  ngOnInit(): void { 
    this.sub = this.route
      .paramMap
      .subscribe(v => {
        if(v.get('id')){
          this.opcionIn=Number(v.get('id'))
          this.pqrFormGruop.get("pqrForm")?.setValue("reclamo")
          this.opcion="reclamo"
        }
    });
  }

  openDialog(id:number) {
    console.log(id)
    let dialogRef = this.dialog.open(RadicadoComponent);
    let instance = dialogRef.componentInstance;
    instance.numero=id
  }

  onSubmit() {
    console.warn(this.pqrFormGruop.value);
    let pqr = new PQR(-1,this.pqrFormGruop.get("pqrForm")!.value,this.pqrFormGruop.get("emailFormControl")!.value,
    this.pqrFormGruop.get("documento")!.value,this.pqrFormGruop.get("nombre")!.value,this.opcionIn,this.pqrFormGruop.get("peticion")!.value )
    this.serviceComunicacion.savePqe(pqr).subscribe(data=>{
      console.log(data)
      this.openDialog(data.objetoResponse);
    });
    
  }

}
