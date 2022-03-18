import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/adjaf/ebd/cadastro/cadastro.component';
import { ListClassesComponent } from './pages/adjaf/ebd/list-classes/list-classes.component';

const routes: Routes = [
  {
    path:'',component:ListClassesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
