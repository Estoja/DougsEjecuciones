import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss']
})
export class GpsComponent implements OnInit {
  @Input() size = '20px';
  @Input() color = 'black';

  constructor() { }

  ngOnInit() {
  }

}
