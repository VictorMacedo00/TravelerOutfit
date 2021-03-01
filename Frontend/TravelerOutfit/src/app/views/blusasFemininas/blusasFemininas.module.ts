import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdministracaoBlusaService } from "../administracao/administracaoBlusa.service";
import { BlusasFemininasListComponent } from "./BlusasFemininas-list.component";
import { BlusasFemininasRoutingModule } from "./blusasFemininas-routing.module";


@NgModule({
  declarations: [BlusasFemininasListComponent],
  imports: [CommonModule, BlusasFemininasRoutingModule],
  providers: [AdministracaoBlusaService],
})
export class BlusasFemininasModule { }

