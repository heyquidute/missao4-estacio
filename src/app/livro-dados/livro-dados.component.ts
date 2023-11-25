import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  //standalone: true,
  //imports: [CommonModule],
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent implements OnInit{
  livro: Livro = new Livro()
  autoresForm: string = ''
  editoras: Array<Editora> = []

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras()
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n')
    this.servLivros.incluir(this.livro)
    this.router.navigateByUrl('/lista')
  } 

}
