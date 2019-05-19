import { ToolbarItems } from './../classes/toolbar-items';
import { Component, OnInit } from '@angular/core';
import { ToolbarItemsService } from '../services/toolbar-items.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  headerItems : Array<ToolbarItems>;

  constructor(private toolbarService: ToolbarItemsService) { }

  ngOnInit() {
    this.headerItems = this.toolbarService.getHeaderItem();
  }

}