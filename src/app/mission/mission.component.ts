import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const nav = document.querySelector('nav') as HTMLElement;
    nav.style.cssText = "color: black;";

    const logop = document.querySelector('.logo p') as HTMLElement;
    logop.style.cssText = "color: black;";

    const line1 = document.querySelector('.line1') as HTMLElement;
    const line2 = document.querySelector('.line2') as HTMLElement;

    line1.style.cssText = "border: solid black 1px;";
    line2.style.cssText = "border: solid black 1px;";
  }

}
