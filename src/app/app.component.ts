import { Component } from '@angular/core';
import { LivroListaModule } from "./livro-lista/livro-lista.module";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [LivroListaModule, RouterModule]
})
export class AppComponent {
  title = 'livros-angular2';
}
