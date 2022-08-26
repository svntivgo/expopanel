import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SeccionUnoComponent } from './components/seccion-uno/seccion-uno.component';
import { SeccionDosComponent } from './components/seccion-dos/seccion-dos.component';
import { SeccionTresComponent } from './components/seccion-tres/seccion-tres.component';
import { SeccionCuatroComponent } from './components/seccion-cuatro/seccion-cuatro.component';

import { HomeComponent } from './components/home/home.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';

const routes: Routes = [{ path: '**', component: MaintenanceComponent },];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SeccionUnoComponent,
    SeccionDosComponent,
    SeccionTresComponent,
    SeccionCuatroComponent,
    HomeComponent,
    FormularioComponent,
    MaintenanceComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    FontAwesomeModule,
    AngularFullpageModule,
    MatFormFieldModule

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
