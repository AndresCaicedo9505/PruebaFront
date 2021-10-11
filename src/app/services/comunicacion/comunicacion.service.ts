import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PQR } from 'src/app/Util/model/PQR';
import { RequestPQR } from 'src/app/Util/model/RequestPQR';
import {Constantes} from '../../Util/Constantes'

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  constructor(private http: HttpClient) { }

  savePqe(pqr:PQR){
    let pqrRequest = new RequestPQR(1,pqr)
    return this.http.post<any>(Constantes.API_ENDPOINT+Constantes.NEWPQR,pqrRequest);
  }

  getPqe(pqr:number){
    console.log(pqr)
    console.log(Constantes.API_ENDPOINT+Constantes.CONSULTARPQR+"/1/"+pqr)
    return this.http.get<any>(Constantes.API_ENDPOINT+Constantes.CONSULTARPQR+"/1/"+pqr);
  }
}
