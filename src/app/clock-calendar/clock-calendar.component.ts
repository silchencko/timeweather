import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-calendar',
  templateUrl: './clock-calendar.component.html',
  styleUrls: ['./clock-calendar.component.css']
})
export class ClockCalendarComponent implements OnInit {

  time: Date;
  isClock: boolean;
  bgColor: string;
  timerId: number;
  constructor() { }

  ngOnInit() {
    this.isClock = true;
    this.bgColor = 'transparent';
    setInterval(() => { this.run(); }, 1000);
  }
  run() {
    this.time = new Date();
  }
  switchClockCalendar() {
    event.preventDefault();
    clearInterval(this.timerId);
    this.isClock = !this.isClock;
  }
  setDefaultBGColor() {
    clearInterval(this.timerId);
    this.bgColor = 'transparent';
  }
  switchBGColor() {
    this.timerId = window.setInterval(() => {
      this.bgColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      }, 1000);
  }
}
