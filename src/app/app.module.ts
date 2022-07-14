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

import { HomeComponent } from './home/home.component';
import { DriversComponent } from './drivers/drivers.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
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
    DriversComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FontAwesomeModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
