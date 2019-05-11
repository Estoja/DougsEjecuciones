import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-copy-right',
  templateUrl: './copy-right.component.html',
  styleUrls: ['./copy-right.component.scss']
})
export class CopyRightComponent implements OnInit {
  @Input() size = '20px';
  @Input() color = 'black';
  
  constructor() { }

  ngOnInit() {
  }

}
