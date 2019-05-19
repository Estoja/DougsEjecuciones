import { ToolbarItems } from './../classes/toolbar-items';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarItemsService {
  private _headerItems_ = [
    new ToolbarItems('INICIO', 'home'),
    new ToolbarItems('QUIÉNES SOMOS', 'whoarewe'),
    new ToolbarItems('SERVICIOS', 'services'),
    new ToolbarItems('CLIENTES', 'clients')
  ]

  constructor() { }

  getHeaderItem() {
    return this._headerItems_;
  }
}