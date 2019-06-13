import { Client } from './../classes/client';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private _clients = [
    new Client('TELECCO', {
      url: 'assets/images/png/logo-teleco-fondo-azul-1.png',
      description: 'Logo de Telecco',
      width: '300px',
      height: '110px'
    }, 'https://www.telec.co/'),
    new Client('SEGUROS DEL NORDESTE', {
      url: 'assets/images/png/logoseguros.png',
      description: 'Logo de Seguros de Nordeste',
      width: '200px',
      height: '140px'
    }, 'http://segurosdelnordeste.com/'),
    new Client('ANTENAS Y TORRES', {
      url: 'assets/images/png/antenas_torres-logo.png',
      description: 'Logo de Seguros de Antenas y Torres',
      width: '158px',
      height: '100px'
    }, 'https://www.antenasytorres.com.co/'),
    new Client('ALUMCOR', {
      url: 'assets/images/png/logo-alumcor.png',
      description: 'Logo de Alumcor',
      width: '220px',
      height: '120px'
    }, 'https://www.alumcor.com/index.php'),
    new Client('IMPORTACIONES AZ', {
      url: 'assets/images/png/logo-importacionesAZ.png',
      description: 'Logo de Importaciones AZ',
      width: '130px',
      height: '130px'
    }, 'Not found'),
    new Client('HIDROTEC', {
      url: 'assets/images/png/hidro-tec-logo.png',
      description: 'Logo de Hidrotec',
      width: '230px',
      height: '71px'
    }, 'Not Found'),
    new Client('GUARDIANES RECOLECTORES', {
      url: 'assets/images/png/guardianesrecolectores-logo.png',
      description: 'Logo de Guardianes recolectores',
      width: '140px',
      height: '130px'
    }, 'Not Found'),
    new Client('CARROCERIAS LIBERTAD', {
      url: 'assets/images/png/carroceriasLibertad-logo.png',
      description: 'Logo de Carrocerias libertad',
      width: '140px',
      height: '140px'
    }, 'Not Found')
  ]
  constructor() { }

  getClients() {
    return this._clients;
  }
}
