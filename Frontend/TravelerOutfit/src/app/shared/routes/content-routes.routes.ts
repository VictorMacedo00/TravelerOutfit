import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [

    {
        path: '',
            loadChildren: () => import('../../views/home/home.module').then((m) => m.HomeModule)
    },
    {
        path: 'administracaoBlusas',
            loadChildren: () => import('../../views/administracao/administracaoBlusa.module').then((m) => m.AdministracaoBlusaModule)
    },
    {
        path: 'blusasMasculinas',
            loadChildren: () => import('../../views/blusasMasculinas/blusasMasculinas.module').then((m) => m.BlusasMasculinasModule)
    },
    {
        path: 'blusasFemininas',
            loadChildren: () => import('../../views/blusasFemininas/blusasFemininas.module').then((m) => m.BlusasFemininasModule)
    }
    
];