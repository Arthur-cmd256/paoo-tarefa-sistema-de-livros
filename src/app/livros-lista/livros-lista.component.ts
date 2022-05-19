import { Component, OnInit, Input } from '@angular/core';
import {Livro} from '../livro.model';

@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})
export class LivrosListaComponent implements OnInit {

  @Input() livros: Livro [] = [];

  constructor() { }

//   livros = [
//     {
//     id: 1,
//     titulo: '1984',
//     autor: 'George Orwell',
//     pagina: 200,
//     },
//     {
//     id: 2,
//     titulo: 'Dom Quixote',
//     autor: 'Miguel de Cervantes',
//     pagina: 500,
//     },
//     {
//     id: 3,
//     titulo: 'O Cortiço',
//     autor: 'Aluísio de Azevedo',
//     pagina: 300,
//     },
// ];

  ngOnInit(): void {
  }

}
