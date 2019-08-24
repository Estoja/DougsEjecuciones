import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {
  @Output() getFilesAction = new EventEmitter<void>();
  @Output() notifyAction = new EventEmitter<string>();

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  isHovering: boolean;
  isDropFileVisible: boolean;
  isCancelAction: boolean;

  constructor(private _sessionService: SessionService, private _storage: AngularFireStorage) {
    this.isDropFileVisible = false;
    this.isCancelAction = false;
  }

  // File upload
  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    const idUser = this._sessionService.idUser;
    // The File object
    const file = event.item(0);

    // The storage path
    const path = `${idUser.uid}/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { ...idUser };

    // The main task
    this.task = this._storage.upload(path, file, { customMetadata });

    // Progress monitoring
    if (file.size > 0) {
      this.percentage = this.task.percentageChanges();
    }
    this.snapshot = this.task.snapshotChanges();

    this.snapshot.pipe(finalize(() => {
      if (this.isCancelAction) {
        this.notifyAction.emit(`El archivo "${ file.name }" fue cancelado.`);
        this.isCancelAction = false;
      } else {
        this.notifyAction.emit(`El archivo "${ file.name }" fue cargado correctamente!`);
        this.getFilesAction.emit();
      }

      setTimeout(() => {
        this.percentage = null;
      }, 3000);
    })).subscribe();
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  taskCancel() {
    this.isCancelAction = true;
    this.task.cancel();
    this.percentage = null;
    this.snapshot = null;
  }
}
