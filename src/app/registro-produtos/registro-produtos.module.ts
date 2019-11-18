import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegistroProdutosComponent } from './registro-produtos.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    RegistroProdutosComponent   
  ],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule   
  ],
  exports: [
    RegistroProdutosComponent
  ]
})
export class RegistroProdutosModule { }
