import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PqrComponent } from './pqr/pqr.component';
import { MenuComponent } from './menu/menu.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  {path:'', component: MenuComponent},
  {path:'pqr/:id', component:PqrComponent},
  {path:'consultar', component:ConsultaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



