import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input() time: Date;
  isUAFormat: boolean;
  get format(): string { return this.isUAFormat ? 'dd.MM.yyyy' : 'MM/dd/yy'; }
  constructor() { }

  ngOnInit() {
    this.isUAFormat = true;
  }
  switchFormat() {
    this.isUAFormat = !this.isUAFormat;
  }
}
