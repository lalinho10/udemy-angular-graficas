import { RouterModule, Routes } from '@angular/router';

import { BarrasComponent } from './components/barras/barras.component';
import { DonaComponent } from './components/dona/dona.component';
import { LineasComponent } from './components/lineas/lineas.component';
import { RadarComponent } from './components/radar/radar.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'lineas', pathMatch: 'full' },
    { path: 'lineas', component: LineasComponent },
    { path: 'barras', component: BarrasComponent },
    { path: 'dona', component: DonaComponent },
    { path: 'radar', component: RadarComponent },
    { path: '**', redirectTo: 'lineas' }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );
