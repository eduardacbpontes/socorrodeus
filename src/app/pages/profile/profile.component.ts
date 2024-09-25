import { Component, OnInit } from '@angular/core';
import { DonoService } from '../../services/dono.service';
import { AccesoService } from '../../services/acceso.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Dono {
  nome: string;
  email: string;
  rua: string;
  cidade: string;
  estado: string;
  cep: string;
  telefone?: string; 
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, FormsModule]
})
export class ProfileComponent implements OnInit {
  dono: Dono = {
    nome: '',
    email: '',
    rua: '',
    cidade: '',
    estado: '',
    cep: '',
    telefone: ''
  };
  isEditMode = false;
  donoId: number | null = null;

  constructor(private donoService: DonoService, private acessoService: AccesoService) {}

  ngOnInit() {
    this.donoId = this.acessoService.getDonoId();
    if (this.donoId !== null) {
      this.loadDonoData();
    } else {
      console.error('Dono ID é null. Certifique-se de que o usuário esteja logado.');
    }
  }

  loadDonoData() {
    if (this.donoId !== null) {
      this.donoService.getDono(this.donoId).subscribe(
        (data: Dono) => {
          this.dono = data;
          console.log('Dono carregado:', this.dono);
        },
        (error) => {
          console.error('Erro ao carregar dados do dono:', error);
        }
      );
    }
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  saveChanges() {
    if (this.donoId !== null) {
      this.donoService.updateDono(this.donoId, this.dono).subscribe(
        (response) => {
          console.log('Dados atualizados com sucesso!');
          this.toggleEditMode();
        },
        (error) => {
          console.error('Erro ao atualizar dados:', error);
        }
      );
    }
  }

  cancelEdit() {
    this.toggleEditMode();
    this.loadDonoData(); // Recarregar dados do servidor
  }
}
