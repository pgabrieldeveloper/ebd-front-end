import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.scss']
})
export class ListAlunosComponent implements OnInit {

  public alunos : Array<{nome:string, ft:string}> = [
    {nome:"Debora",ft:"https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-bonita-em-pe-na-parede-cinza_231208-10760.jpg?w=1380&t=st=1648132804~exp=1648133404~hmac=0f33ed228c23c7ce4b5483d0db322a1c43649c6d904d4ddf8e6cf2b2cbd2e3d0"},
    {nome:"Rebeca",ft:"https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-bonita-em-pe-na-parede-cinza_231208-10760.jpg?w=1380&t=st=1648132804~exp=1648133404~hmac=0f33ed228c23c7ce4b5483d0db322a1c43649c6d904d4ddf8e6cf2b2cbd2e3d0"},
    {nome:"Gabriel",ft:"https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-bonita-em-pe-na-parede-cinza_231208-10760.jpg?w=1380&t=st=1648132804~exp=1648133404~hmac=0f33ed228c23c7ce4b5483d0db322a1c43649c6d904d4ddf8e6cf2b2cbd2e3d0"}];

  constructor() { }

  ngOnInit(): void {
  }

}
