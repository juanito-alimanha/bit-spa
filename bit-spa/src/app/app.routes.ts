import { Routes } from '@angular/router';
import { INICIOComponent } from './components/inicio/inicio.component';
import { EQUIPOComponent } from './components/equipo/equipo.component';
import { POKEAPIComponent } from './components/pokeapi/pokeapi.component';
import { PRODUCTOSComponent } from './components/productos/productos.component';
import { NOSOTROSComponent } from './components/nosotros/nosotros.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'INICIO', title:'Inicio', component:INICIOComponent},
    {path:'equipo', title:'equipo', component:EQUIPOComponent},
    {path:'pokeapi', title:'pokeapi', component:POKEAPIComponent},
    {path:'productos', title:'productos', component:PRODUCTOSComponent},
    {path:'nosotros', title:'nosotros', component:NOSOTROSComponent},
    {path: '', pathMatch:'full', redirectTo:'INICIO'},
    {path:"**", title:"Error 404 ", component:PageNotFoundComponent}
];
