import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProdutoService } from './../produto.service';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:any;
  ieLogar:boolean = false;

  constructor(private router: Router, private produtoService: ProdutoService) { }

  ngOnInit() {
  }

  getPathImage(){
    return '../assets/image/login.png';
  }

  onSubmit(submitEvent:any){
    const passwordLogin:String = submitEvent.form.value.passwordLogin;
    const userLogin = submitEvent.form.value.userLogin;
    const ieLogin:boolean = true;
    this.verificarUserAndLogin(passwordLogin, userLogin, ieLogin);
  }

  async verificarUserAndLogin(passwordLogin:String, userLogin:String, ieLogin:boolean){
    this.produtoService.serviceResponseUsuario(ieLogin).subscribe(usuario => {
      this.forEachUsers(passwordLogin, userLogin, usuario).then(async() =>{
        if(!this.ieLogar){
          alert("Digite seu Usuário ou Senha novamente");
        }else{
          await this.router.navigate(['/registro-produtos']);
        }
      });
    });
  }

  async forEachUsers(passwordLogin:String, userLogin:String, usersArray:any){
    const userAndSenha:Array<any> = JSON.parse(usersArray);
    userAndSenha.forEach(async (userESenha, index) => {
      let nmUsuario = userESenha.nmUsuario;
      let userSenha = userESenha.userSenha;
      if(nmUsuario === userLogin && userSenha === passwordLogin){
        const dsUserSetor = userESenha.dsUserSetor;
        window.sessionStorage.setItem('dsUserSetor', dsUserSetor);
        this.ieLogar = true;
        return resolve;
      }
    });
    return reject;
  }
}
