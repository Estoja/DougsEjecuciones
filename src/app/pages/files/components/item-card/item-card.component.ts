import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() fileData: { name: string; timeCreated: Date; };
  @Output() downloadFileAction = new EventEmitter<any>();
  @Output() deleteFileAction = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }

  toDownloadFile(_name: string): void {
    this.downloadFileAction.emit(_name);
  }

  confirmDeleteFileDialog(_name: string): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: { name: _name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result === 'OK') {
        this.deleteFileAction.emit(_name);
      }
    });
  }
}
