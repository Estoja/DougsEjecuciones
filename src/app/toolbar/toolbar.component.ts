import { ToolbarItems } from './../classes/toolbar-items';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToolbarItemsService } from '../services/toolbar-items.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  headerItems: Array<ToolbarItems>;
  documentsItem: ToolbarItems;

  constructor(private toolbarService: ToolbarItemsService) { }

  ngOnInit() {
    this.headerItems = this.toolbarService.getHeaderItem();
    this.documentsItem = this.headerItems.pop();
    console.log(this.documentsItem);
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}