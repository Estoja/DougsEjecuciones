import { ToolbarItems } from './../classes/toolbar-items';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarItemsService {
  private _headerItems_ = [
    new ToolbarItems('INICIO', 'home', 'home'),
    new ToolbarItems('QUIÉNES SOMOS', 'whoarewe', 'assignment_ind'),
    new ToolbarItems('SERVICIOS', 'services', 'room_service'),
    new ToolbarItems('CLIENTES', 'clients', 'people'),
    new ToolbarItems('CONTACTANOS', 'contact', 'email'),
    new ToolbarItems('DOCUMENTOS', 'http://201.184.144.206:8888/owncloud', 'insert_drive_file')
  ];

  constructor() { }

  getHeaderItem() {
    return this._headerItems_;
  }
}

// Photo by rawpixel.com from Pexels
