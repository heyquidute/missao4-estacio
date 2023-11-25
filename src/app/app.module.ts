import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';
import { LivroListaModule } from './livro-lista/livro-lista.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

@NgModule({
  declarations: [
    LivroDadosComponent
  ],
  imports: [
    BrowserModule,
    LivroListaModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: []
})
export class AppModule { }
