import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  renderMenu() : void{
    const menu = document.querySelector('.menu');
    menu?.classList.toggle('active');
    const line1 = document.querySelector('.line1');
    line1?.classList.toggle('burger-animation1');
    const line2 = document.querySelector('.line2');
    line2?.classList.toggle('burger-animation2');

    const logo = document.querySelector('.logo h1') as HTMLElement;
    logo.style.cssText = "color: white;"
  }

  newPage() : void{
    window.scrollTo(0,0);
    const menu = document.querySelector('.menu');
    menu?.classList.remove('active');

    const line1 = document.querySelector('.line1');
    line1?.classList.remove('burger-animation1');
    const line2 = document.querySelector('.line2');
    line2?.classList.remove('burger-animation2');

    const logo = document.querySelector('.logo h1') as HTMLElement;
    logo.style.cssText = "color: var(--accent);"

  }
}
