import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const nav = document.querySelector('nav') as HTMLElement;
    nav.style.cssText = "color: black";

    const logop = document.querySelector('.logo p') as HTMLElement;
    logop.style.cssText = "color: black;";
  }

  scrollTo(): void {
    window.scrollTo(0, 0);
  }

}
