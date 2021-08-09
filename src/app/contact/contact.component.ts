import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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

    const line1 = document.querySelector('.line1') as HTMLElement;
    const line2 = document.querySelector('.line2') as HTMLElement;

    line1.style.cssText = "border: solid black 1px;";
    line2.style.cssText = "border: solid black 1px;";
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_0aji0bw', 'template_yjbat6l', e.target as HTMLFormElement, 'user_t1Q1IhFl836ZdF6cGg112')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('success! Message has been sent! Thank you!');
      }, (error) => {
        console.log(error.text);
      });
  }

}
