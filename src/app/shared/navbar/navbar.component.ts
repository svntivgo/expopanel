import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  iconos = { faBars };
  esMenuDesplegado: string = '';

  constructor() {}

  ngOnInit(): void {}

  desplegarMenu() {
    this.esMenuDesplegado = this.esMenuDesplegado === '' ? 'desplegado' : '';
  }
}
