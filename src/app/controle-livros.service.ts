import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {codigo: 101, codEditora: 1, titulo: 'Jogos Vorazes', resumo: 'Quando Katniss Everdeen, de 16 anos, decide participar dos Jogos Vorazes para poupar a irmã mais nova, causando grande comoção no país, ela sabe que essa pode ser a sua sentença de morte. Mas a jovem usa toda a sua habilidade de caça e sobrevivência ao ar livre para se manter viva.', autores: ['Suzanne Collins']},
    {codigo: 102, codEditora: 2, titulo: 'Percy Jackson', resumo: 'Percy Jackson é um menino de 12 anos, vivendo a rotina normal de escola, amigos e família que boa parte das crianças dessa idade vive. Contudo, ele acaba descobrindo que mais do que um mero pré- adolescente, ele é um semideus, filho nascido pela relação de uma humana com um deus, no caso, Poseidon.', autores: ['Rick Riordan']},
    {codigo: 103, codEditora: 3, titulo: 'O Hobbit', resumo: 'O Hobbit conta a história de Bilbo Bolseiro, um Hobbit pacato e satisfeito cuja vida vira de cabeça para baixo quando ele se junta ao mago Gandalf e a treze anões em sua jornada para reaver um tesouro roubado.', autores: ['J. R. R. Tolkien']}
  ] 

  constructor() { }

  obterLivros(): Array<Livro>{
    return this.livros;
}

incluir (novoLivro: Livro): void{
    const codigoMaisAlto = this.livros.reduce((max,livro) => (livro.codigo > max ? livro.codigo: max),0)
    novoLivro.codigo = codigoMaisAlto + 1
    this.livros.push(novoLivro)
}

excluir (codigo: number): void{
    const indice = this.livros.findIndex((livro) => livro.codigo === codigo)
    if (indice !== -1){
        this.livros.splice(indice, 1)

    }
}
}
