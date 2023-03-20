import { Component } from '@angular/core';



export class Card {
  id: number;
  name: string;
  description: string;

  constructor() {
    this.id = 1;
    this.name = 'GTX 1050';
    this.description= 'This card gave gamers the freedom to transform their PC into a serious gaming rig and experience the latest titles in their full glory.'
  }
}

const CARDS: Card[] = [
  {id: 1, name: 'GTX 1050', description: 'This card gave gamers the freedom to transform their PC into a serious gaming rig and experience the latest titles in their full glory.'},
  {id: 2, name: 'GTX 1050 Ti', description: 'Fast. Powerful. Loaded with the industry’s most innovative NVIDIA Game Ready technologies. This card was essential gear for every gamer.'},
  {id: 3, name: 'GTX 1060 3GB', description: 'Brilliant performance and innovative new gaming technologies opened the door to high-definition gaming, VR, and beyond. Comes in both 3GB and 6GB options.'},
  {id: 4, name: 'GTX 1070', description: 'Nothing rivalled this gaming beast when it came to performance-per-watt, powered by innovative Pascal architecture.'},
  {id: 5, name: 'GTX 1070 Ti', description: 'This card delivered the speed and gaming horsepower to take on the most challenging, graphics-intensive titles without missing a beat.'},
  {id: 6, name: 'GTX 1080', description: 'Breakthrough performance, power efficiency, and thermal technology made this a go-to graphics card for serious gamers.'},
  {id: 7, name: 'GTX 1080 Ti', description: 'This flagship 10 Series GPU’s advanced tech, next-gen memory, and massive frame buffer set the benchmark for NVIDIA Pascal™-powered gaming and VR performance.'}
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: String = 'Nvidia GTX 10 Series';
  cards = CARDS;
  selectedCard: Card;

  onSelect(card: Card): void {
    this.selectedCard = card;
  }

  constructor() {
    this.selectedCard = new Card;
  }
}
