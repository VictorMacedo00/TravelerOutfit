import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlusasMasculinasListComponent } from './blusasMasculinas-list.component';

const routes: Routes = [

    {
        path: '',
        component: BlusasMasculinasListComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlusasMasculinasRoutingModule { }