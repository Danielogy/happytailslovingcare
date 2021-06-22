import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const nav = document.querySelector('nav') as HTMLElement;
    nav.style.cssText = "color: black;";

    const logop = document.querySelector('.logo p') as HTMLElement;
    logop.style.cssText = "color: black;";
  }

}
