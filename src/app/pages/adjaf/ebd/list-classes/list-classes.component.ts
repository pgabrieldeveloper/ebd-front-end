import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.scss']
})
export class ListClassesComponent implements OnInit {
  public classes: Array<{name:string,description:string}> = [
    {name:"Jovens",description:"Classe dos jovens"},
    {name:"Senhoras",description:"Classe dos Senhoras"},
    {name:"Crianças",description:"Classe das Crianças"},
    {name:"Varões",description:"Classe dos varoes"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
