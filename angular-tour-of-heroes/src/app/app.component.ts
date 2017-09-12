import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}
const HEROES: Hero[] = [
  {id: 11, name: 'Mr Nice'},
  {id: 12, name: 'Mr Narco'},
  {id: 13, name: 'Mr Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magnetas'},
  {id: 16, name: 'Deleritas'},
  {id: 17, name: 'Batman'},
  {id: 18, name: 'Superman'},
  {id: 19, name: 'Spiderman'},
  {id: 20, name: 'Tornado'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


