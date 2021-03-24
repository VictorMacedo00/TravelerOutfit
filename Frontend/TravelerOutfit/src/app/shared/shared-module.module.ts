import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlusasCardComponent } from './components/card/blusasCard.component';
import { ListaComponent } from './components/lista/lista.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [BlusasCardComponent, ListaComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    BlusasCardComponent,
    ListaComponent
  ]
})
export class SharedModuleModule { }
