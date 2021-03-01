import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdministracaoBlusaService } from "../administracao/administracaoBlusa.service";
import { BlusasMasculinasListComponent } from "./BlusasMasculinas-list.component";
import { BlusasMasculinasRoutingModule } from "./blusasMasculinas-routing.module";


@NgModule({
  declarations: [BlusasMasculinasListComponent],
  imports: [CommonModule, BlusasMasculinasRoutingModule],
  providers: [AdministracaoBlusaService],
})
export class BlusasMasculinasModule { }

