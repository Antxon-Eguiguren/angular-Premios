import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuariosService: UsuariosService, private router: Router) {
    this.formulario = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      surname: new FormControl('', [
        Validators.required
      ]),
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      repite_password: new FormControl('', [
        Validators.required
      ]),
      mail: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),
      address: new FormControl('', [
        Validators.required
      ]),
      age: new FormControl('', [
        Validators.required
      ]),
    }, [this.passwordValidator]);
  }

  ngOnInit() {
  }

  async onSubmit(pFormulario) {
    const response = await this.usuariosService.postForm(pFormulario.value);

    // Obtengo la respuesta del servidor con el siguiente paso a hacer
    console.log(response);
    this.router.navigate(['/login']);
  }

  passwordValidator(form) {
    const passwordValue = form.controls.password.value;
    const repitePasswordValue = form.controls.repite_password.value;
    if (passwordValue === repitePasswordValue) {
      return null;
    } else {
      return { passwordvalidator: true };
    }
  }

}
