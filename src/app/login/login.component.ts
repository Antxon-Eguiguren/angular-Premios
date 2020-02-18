import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
  }

  onSubmit(pFormValues) {
    const response = this.usuariosService.postLogin(pFormValues);

    // Obtenemos el token para usar en getPremio() --> e3pGRQVUpPkqI2a5mv.4
    console.log(response);
  }

}
