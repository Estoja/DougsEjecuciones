import { ClientsService } from './../../services/clients.service';
import { Client } from './../../classes/client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: Array<Client>;

  constructor(private clientService: ClientsService) { }

  ngOnInit() {
    this.clients = this.clientService.getClients();
  }

}
