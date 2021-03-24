import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModuleModule } from "src/app/shared/shared-module.module";
import { AdministracaoBlusaService } from "../administracao/administracaoBlusa.service";
import { BlusasListComponent } from "./blusas-list.component";
import { BlusasRoutingModule } from "./blusas-routing.module";


@NgModule({
  declarations: [BlusasListComponent],
  imports: [CommonModule, BlusasRoutingModule, SharedModuleModule],
  providers: [AdministracaoBlusaService],
})
export class BlusasModule { }

