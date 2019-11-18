import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { AdicionarProdutoComponent } from './adicionar-produto.component';

@NgModule({
  declarations: [
    AdicionarProdutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyMaskModule
  ],
  exports: [
    AdicionarProdutoComponent
  ]
})
export class AdicionarProdutoModule { }
