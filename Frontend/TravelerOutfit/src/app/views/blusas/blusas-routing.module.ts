import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlusasListComponent } from './blusas-list.component';

const routes: Routes = [

    {
        path: ':genero',
        component: BlusasListComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlusasRoutingModule { }