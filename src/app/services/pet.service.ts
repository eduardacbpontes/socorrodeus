import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl = 'http://localhost:3000/api/pets'; // URL da API

  constructor(private http: HttpClient) {}

  cadastrarPet(petData: any): Observable<any> { // Mantido o parâmetro apenas como petData
    // Agora vamos garantir que a propriedade donoId esteja corretamente incluída
    const petComDono = { ...petData }; // O nome da propriedade deve corresponder ao que é esperado no backend

    return this.http.post(`${this.apiUrl}`, petComDono); // Faz a requisição POST com os dados do pet
  }
}
