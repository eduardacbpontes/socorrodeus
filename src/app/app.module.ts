import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessModalComponent } from './success-modal/success-modal.component'; // Corrija o caminho aqui
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  declarations: [
    SuccessModalComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: []
})
export class AppModule {}
