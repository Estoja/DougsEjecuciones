import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
  @Input() size = '20px';
  @Input() color = 'black';
  
  constructor() { }

  ngOnInit() {
  }

}
