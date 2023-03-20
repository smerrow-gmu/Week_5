import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: String = 'Nvidia GTX 10 Series';
  cards = CARDS;
}

export class Card {
  id: number;
  name: string;
}

const CARDS: Card[] = [
  {id: 1, name: 'GTX 1050'},
  {id: 2, name: 'GTX 1050 Ti'},
  {id: 3, name: 'GTX 1060 3GB'},
  {id: 4, name: 'GTX 1060 6GB'},
  {id: 5, name: 'GTX 1070'},
  {id: 6, name: 'GTX 1070 Ti'},
  {id: 7, name: 'GTX 1080'},
  {id: 8, name: 'GTX 1080 Ti'}
];

