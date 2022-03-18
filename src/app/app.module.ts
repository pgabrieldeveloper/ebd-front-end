import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ListClassesComponent } from './pages/adjaf/ebd/list-classes/list-classes.component';
import { CadastroComponent } from './pages/adjaf/ebd/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListAlunosComponent } from './pages/adjaf/ebd/list-alunos/list-alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListClassesComponent,
    CadastroComponent,
    ListAlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
