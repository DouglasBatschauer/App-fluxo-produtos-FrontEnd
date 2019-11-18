import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegistroProdutosModule } from './registro-produtos/registro-produtos.module';
import { AdicionarProdutoModule } from './adicionar-produto/adicionar-produto.module';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProdutoService } from './produto.service';
import { CadastroUsuarioModule } from './cadastro-usuario/cadastro-usuario.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegistroProdutosModule,
    AdicionarProdutoModule,
    CurrencyMaskModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    CadastroUsuarioModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
