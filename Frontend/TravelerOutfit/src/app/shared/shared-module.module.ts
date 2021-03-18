import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlusasCardComponent } from './components/card/blusasCard.component';



@NgModule({
  declarations: [BlusasCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BlusasCardComponent
  ]
})
export class SharedModuleModule { }
