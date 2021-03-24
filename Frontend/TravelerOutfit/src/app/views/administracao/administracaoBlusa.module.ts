import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModuleModule } from "src/app/shared/shared-module.module";
import { AdministracaoBlusaRoutingModule } from "./administracaoBlusa-routing.module";
import { AdministracaoBlusaService } from "./administracaoBlusa.service";
import { AdministracaoBlusaFormComponent } from "./form/AdministracaoBlusa-form.component";
import { AdministracaoBlusaListComponent } from "./list/AdministracaoBlusa-list.component";


@NgModule({
  declarations: [AdministracaoBlusaListComponent, AdministracaoBlusaFormComponent],
  imports: [CommonModule, AdministracaoBlusaRoutingModule,FormsModule, ReactiveFormsModule, SharedModuleModule],
  providers: [AdministracaoBlusaService],
})
export class AdministracaoBlusaModule { }