import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public cadastroForm :FormGroup = this.formbuilder.group({
    email:[''],
    password:[''],
    permissoes:[''],
  })

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }

}
