import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.scss']
})
export class ListAlunosComponent implements OnInit {

  public alunos : Array<{nome:string}> = [{nome:"Debora"},{nome:"Rebenca"},{nome:"Gabriel"}];

  constructor() { }

  ngOnInit(): void {
  }

}
