import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  response: any;
  premio: boolean;

  constructor(private usuariosService: UsuariosService) {
    this.premio = false;
  }

  ngOnInit() {
  }

  async manejarClickPremio() {
    this.response = await this.usuariosService.getPremio();

    // Obtengo la pista para obtener el premio
    console.log(this.response);
    this.premio = true;
  }

}
