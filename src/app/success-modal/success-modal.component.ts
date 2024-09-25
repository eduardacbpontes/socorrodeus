import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-success-modal',
  template: `
    <h2 mat-dialog-title class="success-title">Sucesso!</h2>
    <mat-dialog-content class="success-content">
      <p>O pet foi cadastrado com sucesso!</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button class="close-button" (click)="onClose()">Fechar</button>
    </mat-dialog-actions>
  `,
})
export class SuccessModalComponent {
  constructor(
    public dialogRef: MatDialogRef<SuccessModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
