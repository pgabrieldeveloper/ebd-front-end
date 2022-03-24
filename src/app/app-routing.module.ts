import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/adjaf/ebd/cadastro/cadastro.component';
import { ListAlunosComponent } from './pages/adjaf/ebd/list-alunos/list-alunos.component';
import { ListClassesComponent } from './pages/adjaf/ebd/list-classes/list-classes.component';
import {ChamadaComponent} from "./pages/adjaf/ebd/chamada/chamada.component";

const routes: Routes = [
  {
    path:'',component:ListClassesComponent,
  },
  {
    path:'chamada',component:ChamadaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
