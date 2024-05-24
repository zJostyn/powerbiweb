import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { PrediccionComponent } from './components/prediccion/prediccion.component';
import { InversionComponent } from './components/inversion/inversion.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { UtilidadComponent } from './components/utilidad/utilidad.component';
import { MargenComponent } from './components/margen/margen.component';
import { NormalComponent } from './components/normal/normal.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'mapa', component: MapaComponent},
  {path: 'prediccion', component: PrediccionComponent},
  {path: 'inversion', component: InversionComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'utilidad', component: UtilidadComponent},
  {path: 'margen', component: MargenComponent},
  {path: 'normal', component: NormalComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
