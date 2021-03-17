import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdministracaoBlusaRoutingModule } from "./administracaoBlusa-routing.module";
import { AdministracaoBlusaService } from "./administracaoBlusa.service";
import { AdministracaoBlusaFormComponent } from "./form/AdministracaoBlusa-form.component";
import { AdministracaoBlusaListComponent } from "./list/AdministracaoBlusa-list.component";


@NgModule({
  declarations: [AdministracaoBlusaListComponent, AdministracaoBlusaFormComponent],
  imports: [CommonModule, AdministracaoBlusaRoutingModule,FormsModule, ReactiveFormsModule],
  providers: [AdministracaoBlusaService],
})
export class AdministracaoBlusaModule { }