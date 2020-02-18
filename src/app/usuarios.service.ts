import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://registrate.ngrok.io';
  }

  getPremio(): Promise<any> {
    // Usamos el token en la cabecera --> e3pGRQVUpPkqI2a5mv.4
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': 'e3pGRQVUpPkqI2a5mv.4'
      })
    };
    return this.httpClient.get<any>(`${this.baseUrl}/premio`, httpOptions).toPromise();
  }

  postForm(pForm): Promise<any> {
    const body = {
      name: pForm.name,
      surname: pForm.surname,
      username: pForm.username,
      password: pForm.password,
      mail: pForm.mail,
      address: pForm.address,
      age: pForm.age
    };
    return this.httpClient.post<any>(`${this.baseUrl}/register`, body).toPromise();
  }

  postLogin(pFormValues): Promise<any> {
    const body = {
      username: pFormValues.username,
      password: pFormValues.password
    };
    return this.httpClient.post<any>(`${this.baseUrl}/login`, body).toPromise();
  }

}
