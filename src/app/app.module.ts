import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildFirstComponent } from './first/child-first/child-first.component';
import { DetailComponent } from './detail/detail.component';

// A definição segue uma ordem
const routes: Routes = [
  {
    // Caminho que queremos utilizar para renderizar o componente
    path: 'first-component',
    component: FirstComponent,
    children: [
      {
        path: 'child-first',
        component: ChildFirstComponent,
      },
    ],
  },
  {
    // Caminho que queremos utilizar para renderizar o componente
    path: 'second-component',
    component: SecondComponent,
    children: [
      {
        path: 'child-first',
        component: ChildFirstComponent,
      },
    ],
  },
  {
    // Rota dinamica
    // Quando temos o :(dois pontos) o valor é parametrizavel. Exemplo: http://localhost:4200/detail/1234'
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    ChildFirstComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    // Quero usar a dependencia das rotas. Passo como argumento as rotas que usarei.
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
