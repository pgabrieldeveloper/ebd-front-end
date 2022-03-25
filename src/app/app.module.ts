import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ListClassesComponent } from './pages/adjaf/ebd/list-classes/list-classes.component';
import { CadastroComponent } from './pages/adjaf/ebd/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListAlunosComponent } from './pages/adjaf/ebd/list-alunos/list-alunos.component';
import {SharedModule} from "./shared/shared.module";
import { ChamadaComponent } from './pages/adjaf/ebd/chamada/chamada.component';
import { ListAulasComponent } from './pages/adjaf/ebd/list-aulas/list-aulas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListClassesComponent,
    CadastroComponent,
    ListAlunosComponent,
    ChamadaComponent,
    ListAulasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
