import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GalleriaModule } from 'primeng/galleria';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './components/home/home.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { MontajesComponent } from './components/montajes/montajes.component';
import { CreatividadComponent } from './components/creatividad/creatividad.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { DataComponent } from './components/data/data.component';
import { AliadosComponent } from './components/aliados/aliados.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

const routes: Routes = [{ path: 'mantenimiento', component: MaintenanceComponent },];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FormularioComponent,
    MaintenanceComponent,
    MontajesComponent,
    CreatividadComponent,
    MarketingComponent,
    DataComponent,
    AliadosComponent,
    ContactoComponent,
    GaleriaComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    FontAwesomeModule,
    AngularFullpageModule,
    MatFormFieldModule,
    GalleriaModule,

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
