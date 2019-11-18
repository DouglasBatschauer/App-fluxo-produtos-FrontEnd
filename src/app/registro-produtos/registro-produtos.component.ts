import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-produtos',
  templateUrl: './registro-produtos.component.html',
  styleUrls: ['./registro-produtos.component.css']
})
export class RegistroProdutosComponent implements OnInit {

  dados:String;
  status:String;
  dsValuesChangeTable:any;
  arrayProduto: Array<any> 
  disableButtonSalvar:boolean = false;
  ieSetorCompras:boolean = false;
  ieSetorAlmoxarife:boolean = false;
  paginaAtual = 1;

  constructor(private produtoService: ProdutoService, private router: Router) { }


  ngOnInit() {
    this.getHeads();
    this.getProdutos();
    this.verificarCamposReadOnly();
  }

  verificarCamposReadOnly(){
    switch(window.sessionStorage.getItem("dsUserSetor")){
      case 'Compras':
        this.ieSetorCompras = true;
        break;
      case 'Almoxarife':
        this.ieSetorAlmoxarife = true;
        break;
      default:
        break;  
    }
  }

  getHeads() {
    return ['Id', 'Produto', 'Descrição', 'Preco', 'Status'];
  }

  getStatus(){
    return ['Solicitacao', 'Aprovar', 'Reprovar'];
  }

  getProdutos(){
    this.produtoService.serviceResponse().subscribe(produtos => {
      this.arrayProduto = JSON.parse(produtos);
    });
  }

  onClick(status:any){
    this.dsValuesChangeTable = status;
    this.validaCampoObs();
  }

  validaCampoObs(){
    if(this.dsValuesChangeTable){
      const ieStatusSelected = this.dsValuesChangeTable.parentElement
      .children[5]
      .children[0].value;
      if(ieStatusSelected === 'Reprovar'){
        this.dsValuesChangeTable.parentElement
        .children[6]
        .children[0]
        .children[0]
        .className = 'form-control is-invalid';
        this.disableButtonSalvar = true;
      }else{
        this.dsValuesChangeTable.parentElement
        .children[6]
        .children[0]
        .children[0]
        .className = "form-control";
        this.disableButtonSalvar = false;
      }
    }  
  }

  onKeyPress(eventInput:any){
    this.disableButtonSalvar = false;
    const valorInput:String = eventInput.currentTarget.value;
    if(this.dsValuesChangeTable){
      if(valorInput == ''){
        this.disableButtonSalvar = true
        this.dsValuesChangeTable.parentElement.children[6].children[0].children[0].className = 'form-control is-invalid';
      }else{
        this.disableButtonSalvar = false;
        this.dsValuesChangeTable.parentElement.children[6].children[0].children[0].className = "form-control";      
      }
    }  
  }

  onClickSalvar(){
    if(this.dsValuesChangeTable){
      //Percorre a Table para pegar os valores correspondes a linha que foi alterada o select
      const produtoInfo:any = {
        idProduto: this.dsValuesChangeTable.parentElement.children[0].innerText,
        dsStatus: this.getNameStatus(this.dsValuesChangeTable.parentElement.children[5].children[0].value)
      };
      this.produtoService.servicePut(produtoInfo).subscribe(() => {
        this.getProdutos();
      });
    }
  }

  getNameStatus(nameStatus:String){
    switch(nameStatus){
      case 'Aprovar':
        return 'Aprovado'
        break;
      case 'Reprovar':
        return 'Reprovado'
        break;
      default:
        return 'Solicitação'
        break;    
    }
  }
 
}
