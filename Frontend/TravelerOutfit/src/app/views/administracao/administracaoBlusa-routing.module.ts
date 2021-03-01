import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracaoBlusaFormComponent } from './form/AdministracaoBlusa-form.component';
import { AdministracaoBlusaListComponent } from './list/AdministracaoBlusa-list.component';

const routes: Routes = [

    {
        path: '',
        component: AdministracaoBlusaListComponent
    },
    {
        path: 'cadastro',
        component: AdministracaoBlusaFormComponent
    },
    {
        path: 'alterar/:id',
        component: AdministracaoBlusaFormComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdministracaoBlusaRoutingModule { }