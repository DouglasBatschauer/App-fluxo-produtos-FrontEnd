import { Component, OnInit } from '@angular/core';

import { ProdutoService } from './../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit() {
  }

  getSetores(){
    return ['Administracao', 'Almoxarife', 'Compras'];
  }

  onSubmitUser(form:any){
    const usuario = {
      nmUsuario: form.value.nmUsuario,
      userSenha: form.value.userSenha,
      userCpf: form.value.userCpf ,
      dsUserSetor: form.value.dsUserSetor
    }
    this.adicionaUsuario(usuario);
  }
  adicionaUsuario(usuario:any){
    this.produtoService.serviceRequestUsuario(usuario).subscribe(() =>{
      this.router.navigate(['/registro-produtos']);
    });
  }
}
