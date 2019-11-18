import { AdicionarProdutoComponent } from './adicionar-produto/adicionar-produto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistroProdutosComponent } from './registro-produtos/registro-produtos.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';



const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'registro-produtos', component: RegistroProdutosComponent},
  { path: 'adicionar-produto', component: AdicionarProdutoComponent},
  { path: 'adicionar-usuario', component: CadastroUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
