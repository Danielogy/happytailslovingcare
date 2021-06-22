import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const nav = document.querySelector('nav') as HTMLElement;
    nav.style.cssText = "color: black;"

    const logop = document.querySelector('.logo p') as HTMLElement;
    logop.style.cssText = "color: black;";
  }

}
