import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProdutoService } from './../produto.service';


@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent implements OnInit {
 
  precoProduto:number;
 

  constructor(private produtoService: ProdutoService, private router: Router) { }
 
  ngOnInit() { }

  getSetores(){
    return ['Administracao', 'Almoxarife', 'Compras'];
  }

  onSubmit(form:any){
    const produto = {
      nmProduto: form.value.nmProduto ,
      descricaoProduto: form.value.descricaoProd ,
      precoProduto: form.value.precoProd ,
      dsSetor: form.value.nmSetor,
      solicitanteProduto: form.value.nmResponsavel 
    }
    this.adicionaProduto(produto);
  }

  adicionaProduto(produto:any){
    this.produtoService.serviceRequest(produto).subscribe(() =>{
      this.router.navigate(['/registro-produtos']);
    });
  }
}
