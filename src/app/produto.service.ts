import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProdutoService {

  ulrProdutos:any = 'http://localhost:8000/ProdutosBackEnd/webresources/api-produtos/';
  urlUsuario:any = 'http://localhost:8000/ProdutosBackEnd/webresources/api-usuario/';

  constructor(private http: HttpClient) { }
  
  serviceResponse() {
    return this.http.get(this.ulrProdutos, {responseType: 'text'});
  }

  serviceRequest(produto:any) {
    const restUrl:any = this.ulrProdutos + "adicionar-produto";
    return this.http.post<Array<any>>(restUrl, produto);
  }

  servicePut(produto:any) {
    return this.http.put<Array<any>>(this.ulrProdutos, produto);
  }

  serviceResponseUsuario(ieGetLogin:boolean) {
    const urlUsuarioLocal = ieGetLogin ? this.urlUsuario + 'get-users' : this.urlUsuario;
    return this.http.get(urlUsuarioLocal, {responseType: 'text'});
  }

  serviceRequestUsuario(usuario:any) {
    const restUrlUser:any = this.urlUsuario + "adicionar-usuario";
    return this.http.post<Array<any>>(restUrlUser, usuario);
  }

  servicePutUsuario(usuario:any) {
    return this.http.put<Array<any>>(this.urlUsuario, usuario);
  }

}
