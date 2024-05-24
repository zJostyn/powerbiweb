import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { PrediccionComponent } from './components/prediccion/prediccion.component';
import { InversionComponent } from './components/inversion/inversion.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { UtilidadComponent } from './components/utilidad/utilidad.component';
import { MargenComponent } from './components/margen/margen.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { NormalComponent } from './components/normal/normal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    MapaComponent,
    PrediccionComponent,
    InversionComponent,
    EmpresaComponent,
    UtilidadComponent,
    MargenComponent,
    NormalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
