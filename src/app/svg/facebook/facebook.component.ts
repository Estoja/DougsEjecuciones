import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {
  @Input() size = '20px';
  @Input() color = 'black';
  
  constructor() { }

  ngOnInit() {
  }

}
