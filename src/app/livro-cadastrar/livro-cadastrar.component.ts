import { Component} from '@angular/core';


@Component({
  selector: 'app-livro-cadastrar',
  templateUrl: './livro-cadastrar.component.html',
  styleUrls: ['./livro-cadastrar.component.css']
})
export class LivroCadastrarComponent {

  id: number;
  titulo: string;
  autor: string;
  paginas: number;

  onAdicionarLivro() {
    console.log('inserindo livro...');
    }

}
