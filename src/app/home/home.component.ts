import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeNavColor();
  }

  changeNavColor(): void {
    const nav = document.querySelector('nav') as HTMLElement;
    nav.style.cssText = "color: white;"

    const logop = document.querySelector('.logo p') as HTMLElement;
    logop.style.cssText = "color: white;"
  }

  scrollTo() : void{
    window.scrollTo(0,0);
  }

}
