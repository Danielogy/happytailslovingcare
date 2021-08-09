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
    },
    {
      image: 'gallery1/Szafirek.jpeg',
      name: 'Szafirek',
    },
    // exception here -- all of nicole's pets go together
    {
      image: 'gallery3/hazel-willow.jpeg',
      name: 'Hazel and Willow',
    },
    {
      image : 'gallery1/blueberry.jpeg',
      name: 'Blueberry',
    },
    
    {
      image: 'gallery1/daisy.jpeg',
      name: 'Daisy',
    },
    {
      image: 'gallery1/hoot.jpeg',
      name: 'Hoot',
    },
    {
      image: 'gallery1/mila-emma.jpeg',
      name: 'Mila(left) Emma(right)',
    },

    // gallery2
    {
      image: 'gallery2/Bodhi.jpeg',
      name: 'Bodhi',
    },
    {
      image: 'gallery2/bayonna.jpeg',
      name: 'Bayonna',
    },
    {
      image: 'gallery2/annie-petey.jpeg',
      name: 'Annie(top) and Petey(bottom)',
    },
    {
      image: 'gallery2/buster.jpeg',
      name: 'Buster',
    },
    {
      image: 'gallery2/calliope.jpeg',
      name: 'Calliope',
    },
    {
      image: 'gallery2/charlie.jpeg',
      name: 'Charlie',
    },
    {
      image: 'gallery2/prince.jpeg',
      name: 'Prince',
    },
    {
      image: 'gallery2/louie.jpeg',
      name: 'Louie',
    },
    {
      image: 'gallery2/littleguy-florence.jpeg',
      name: 'Little guy and Florence',
    },
    {
      image: 'gallery2/sheika.jpeg',
      name: 'Sheika',
    },

    // gallery3
    {
      image: 'gallery3/bibby.jpeg',
      name: 'Bibby',
    },
    {
      image: 'gallery3/bojangles.jpeg',
      name: 'Bojangles',
    },
    {
      image: 'gallery3/luna.jpeg',
      name: 'Luna',
    },
    {
      image: 'gallery3/cassie.jpeg',
      name: 'Cassie',
    },
    {
      image: 'gallery3/diva.jpeg',
      name: 'Diva',
    },
    {
      image: 'gallery3/hans.jpeg',
      name: 'Hans',
    },
    {
      image: 'gallery3/casper.jpeg',
      name: 'Casper',
    },
    {
      image: 'gallery3/porter.jpeg',
      name: 'Porter',
    },
    {
      image: 'gallery3/rouge-ozzie.jpeg',
      name: 'Rouge(left) and Ozzie(right)',
    },
    {
      image: 'gallery3/roxie.jpeg',
      name: 'Roxie',
    },
    {
      image: 'gallery3/seamus.jpeg',
      name: 'Seamus',
    },

    // gallery 4
    {
      image: 'gallery4/abilone.jpeg',
      name: 'Abilone',
    },
    {
      image: 'gallery4/biggie-zee.jpeg',
      name: 'Biggie(rabbit) and Zee',
    },
    {
      image: 'gallery4/comet.jpeg',
      name: 'Comet',
    },
    {
      image: 'gallery4/harley.jpeg',
      name: 'Harley',
    },
    {
      image: 'gallery4/leo.jpeg',
      name: 'Leo',
    },
    {
      image: 'gallery4/peanut.jpeg',
      name: 'Peanut',
    },
    {
      image: 'gallery4/seaver.jpeg',
      name: 'Seaver',
    },
    {
      image: 'gallery4/theo.jpeg',
      name: 'Theo',
    },
    {
      image: 'gallery4/tucker-hershey.jpeg',
      name: 'Tucker and Hershey',
    },

    // gallery 5
    {
      image: 'gallery5/charlie.jpeg',
      name: 'Charlie',
    },
    {
      image: 'gallery5/goldie.jpeg',
      name: 'Goldie',
    },
    {
      image: 'gallery5/habib.jpeg',
      name: 'Habib',
    },
    {
      image: 'gallery5/harley.jpeg',
      name: 'Harley',
    },
    {
      image: 'gallery5/june.jpeg',
      name: 'June',
    },
    {
      image: 'gallery5/loki.jpeg',
      name: 'Loki',
    },
    {
      image: 'gallery5/nala.jpeg',
      name: 'Nala',
    },
    {
      image: 'gallery5/penny.jpeg',
      name: 'Penny',
    },
    {
      image: 'gallery5/pria.jpeg',
      name: 'Pria',
    },
    {
      image: 'gallery5/talon.jpeg',
      name: 'Talon',
    },
    {
      image: 'gallery5/wally.jpeg',
      name: 'Wally',
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

    const line1 = document.querySelector('.line1') as HTMLElement;
    const line2 = document.querySelector('.line2') as HTMLElement;

    line1.style.cssText = "border: solid black 1px;";
    line2.style.cssText = "border: solid black 1px;";
  }

}
