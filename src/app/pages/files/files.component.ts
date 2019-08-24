import { Component } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {
  isAuthenticated: boolean;
  isLoading: boolean;
  isFormVisible: boolean;
  displayName: string;
  files: Array<any>;

  constructor(
    private _sessionService: SessionService,
    private _storage: AngularFireStorage,
    public _snackBar: MatSnackBar
  ) {
    this.isFormVisible = false;
    this.displayName = '';
    this.files = [];
    this.checkAuthentication();
  }

  checkAuthentication() {
    this.isLoading = true;
    this.files = [];
    this._sessionService.isAuthenticated().then(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      this.isLoading = false;
      this.isFormVisible = true;
      this.displayName = this._sessionService.displayName;
      if (isAuthenticated) {
        this.getFiles();
      }
    });
  }

  doSignOut() {
    this.isLoading = true;
    this._sessionService.logout().then(() => {
      this.checkAuthentication();
    });
  }

  getFiles() {
    this.isLoading = true;
    const idUser = this._sessionService.idUser;
    const storageRef = this._storage.storage.ref();
    storageRef.child(idUser.uid).listAll().then(results => {
      const tempFiles = [];
      if (results.items.length === 0) {
        this.isLoading = false;
      }

      results.items.map(async item => {
        const temp = await (await item.getMetadata()).timeCreated;
        await tempFiles.push({ name: item.name, timeCreated: temp });
          if (tempFiles.length === results.items.length) {
            this.putFilesOnTemplate(tempFiles);
          }
      });
    });
  }

  putFilesOnTemplate(_files) {
    const tempFiles = _files.sort((a, b) => {
      const dtA = new Date(a.timeCreated);
      const dtB = new Date(b.timeCreated);
      if (dtA > dtB) { return 1; }
      if (dtA < dtB) { return -1; }
      return 0;
    });
    this.files = JSON.parse(JSON.stringify(tempFiles));
    this.isLoading = false;
  }

  downloadFile(_fileName) {
    this.isLoading = true;
    const idUser = this._sessionService.idUser;
    const storageRef = this._storage.storage.ref(`${idUser.uid}/${_fileName}`);
    storageRef.getMetadata().then(data => {
      storageRef.getDownloadURL().then(url => {
        this.isLoading = false;
        window.open(url, '_blank');
        return false;
      });
    });
  }

  deleteFile(_fileName) {
    this.isLoading = true;
    const idUser = this._sessionService.idUser;
    const storageRef = this._storage.storage.ref(`${idUser.uid}/${_fileName}`);
    storageRef.delete().then(() => {
      this.isLoading = false;
      this.getFiles();
      this.openSnackBar(`El archivo "${_fileName.slice(14)}" fue eliminado con exito!`, 'Cerrar');
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
