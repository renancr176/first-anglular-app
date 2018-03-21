import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TesteComponent } from './teste/teste.component';

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'teste', component: TesteComponent}
]