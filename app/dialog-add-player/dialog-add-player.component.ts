//import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
//export class DialogAddPlayerComponent implements OnInit {
export class DialogAddPlayerComponent {
  name: string = '';

  constructor( public dialogRef: MatDialogRef<DialogAddPlayerComponent> ) { }

  //ngOnInit(): void {
  //}
  
  onNoClick(){
    this.dialogRef.close();
  }
}
