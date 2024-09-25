import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [MatSidenavModule, CommonModule, MatIconModule],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(300, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  isSidebarVisible = true;
  isSubmenuOpen = false;

  constructor(private sidebarService: SidebarService, private router: Router) {}

  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
      this.isSidebarVisible = isVisible;
    });
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    this.sidebarService.toggleSidebar();
  }

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

  cadastrarPet() {
    console.log('cadastrando pet');
    this.router.navigate(['/cadastro-pet']);
  }

  config() {
    console.log('Configurações');
    this.router.navigate(['/Config']);
  }


  logout() {
    console.log('Logging out...');
    this.router.navigate(['/login']);
  }
}
