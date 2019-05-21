import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  @Input() time: Date;
  isShort: boolean;
  get format(): string { return this.isShort ? 'hh:mm' : 'hh:mm:ss'; }
  constructor() { }

  ngOnInit() {
    this.isShort = true;
  }
  switchFormat() {
    this.isShort = !this.isShort;
  }
}
