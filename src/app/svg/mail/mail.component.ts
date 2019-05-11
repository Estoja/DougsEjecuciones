import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  @Input() size = '20px';
  @Input() color = 'black';
  
  constructor() { }

  ngOnInit() {
  }

}
