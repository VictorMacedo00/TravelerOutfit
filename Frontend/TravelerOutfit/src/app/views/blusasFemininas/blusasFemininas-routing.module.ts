import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlusasFemininasListComponent } from './blusasFemininas-list.component';

const routes: Routes = [

    {
        path: '',
        component: BlusasFemininasListComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlusasFemininasRoutingModule { }