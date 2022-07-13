import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  esMenuContraido: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  transformarMenu() {
    this.esMenuContraido = !this.esMenuContraido;
    console.log(this.esMenuContraido);
  }
}
