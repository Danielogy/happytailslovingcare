import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  p: number = 1;
  
  pets: any = [

    // gallery1
    {
      image: 'gallery1/cassie.jpeg',
      name: 'Cassie',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery1/Szafirek.jpeg',
      name: 'Szafirek',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    // exception here -- all of nicole's pets go together
    {
      image: 'gallery3/hazel-willow.jpeg',
      name: 'Hazel and Willow',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image : 'gallery1/blueberry.jpeg',
      name: 'Blueberry',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    
    {
      image: 'gallery1/daisy.jpeg',
      name: 'Daisy',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery1/hoot.jpeg',
      name: 'Hoot',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery1/mila-emma.jpeg',
      name: 'Mila(left) Emma(right)',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },

    // gallery2
    {
      image: 'gallery2/Bodhi.jpeg',
      name: 'Bodhi',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery2/bayonna.jpeg',
      name: 'Bayonna',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery2/annie-petey.jpeg',
      name: 'Annie(top) and Petey(bottom)',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery2/buster.jpeg',
      name: 'Buster',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery2/calliope.jpeg',
      name: 'Calliope',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery2/charlie.jpeg',
      name: 'Charlie',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery2/prince.jpeg',
      name: 'Prince',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery2/louie.jpeg',
      name: 'Louie',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery2/littleguy-florence.jpeg',
      name: 'Little guy and Florence',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery2/sheika.jpeg',
      name: 'Sheika',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },

    // gallery3
    {
      image: 'gallery3/bibby.jpeg',
      name: 'Bibby',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery3/bojangles.jpeg',
      name: 'Bojangles',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery3/luna.jpeg',
      name: 'Luna',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery3/cassie.jpeg',
      name: 'Cassie',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery3/diva.jpeg',
      name: 'Diva',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery3/hans.jpeg',
      name: 'Hans',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery3/casper.jpeg',
      name: 'Casper',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery3/porter.jpeg',
      name: 'Porter',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery3/rouge-ozzie.jpeg',
      name: 'Rouge(left) and Ozzie(right)',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery3/roxie.jpeg',
      name: 'Roxie',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery3/seamus.jpeg',
      name: 'Seamus',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },

    // gallery 4
    {
      image: 'gallery4/abilone.jpeg',
      name: 'Abilone',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery4/biggie-zee.jpeg',
      name: 'Biggie(rabbit) and Zee',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery4/comet.jpeg',
      name: 'Comet',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery4/harley.jpeg',
      name: 'Harley',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery4/leo.jpeg',
      name: 'Leo',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery4/peanut.jpeg',
      name: 'Peanut',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery4/seaver.jpeg',
      name: 'Seaver',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery4/theo.jpeg',
      name: 'Theo',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery4/tucker-hershey.jpeg',
      name: 'Tucker and Hershey',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },

    // gallery 5
    {
      image: 'gallery5/charlie.jpeg',
      name: 'Charlie',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery5/goldie.jpeg',
      name: 'Goldie',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery5/habib.jpeg',
      name: 'Habib',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery5/harley.jpeg',
      name: 'Harley',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery5/june.jpeg',
      name: 'June',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery5/loki.jpeg',
      name: 'Loki',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery5/nala.jpeg',
      name: 'Nala',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery5/penny.jpeg',
      name: 'Penny',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery5/pria.jpeg',
      name: 'Pria',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery5/talon.jpeg',
      name: 'Talon',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    {
      image: 'gallery5/wally.jpeg',
      name: 'Wally',
      des: 'Calm and wise, Pedro is the perfect companion. Responds well to commands and has a gorgeous, lustrous coat.'
    },
    
  ];
  constructor() { }

  scrollTo(): void {
    document.querySelector<HTMLElement>(".family")?.scrollIntoView();
    console.log('hello');
  }

  ngOnInit(): void {
    const nav = document.querySelector('nav') as HTMLElement;
    nav.style.cssText = "color: black;"

    const logop = document.querySelector('.logo p') as HTMLElement;
    logop.style.cssText = "color: black;";
  }

}
