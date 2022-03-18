import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlunosComponent } from './list-alunos.component';

describe('ListAlunosComponent', () => {
  let component: ListAlunosComponent;
  let fixture: ComponentFixture<ListAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAlunosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
