import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.scss']
})
export class ListClassesComponent implements OnInit {
  public classes: Array<{name:string,number:string}> = [
    {name:"Jovens",number:"20"},
    {name:"Senhoras",number:"30"},
    {name:"Crianças",number:"11"},
    {name:"Varões",number:"7"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
