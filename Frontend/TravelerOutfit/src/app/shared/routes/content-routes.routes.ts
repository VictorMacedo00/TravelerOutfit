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
        path: 'blusas',
            loadChildren: () => import('../../views/blusas/blusas.module').then((m) => m.BlusasModule)
    }
    
];