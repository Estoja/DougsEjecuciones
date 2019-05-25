import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToolbarItems } from 'src/app/classes/toolbar-items';
import { ToolbarItemsService } from 'src/app/services/toolbar-items.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  headerItems : Array<ToolbarItems>;
  
  constructor( private toolbarService: ToolbarItemsService ) { }

  ngOnInit() {
    this.headerItems = this.toolbarService.getHeaderItem();
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}