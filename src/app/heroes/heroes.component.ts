import { Component, OnInit } from '@angular/core';

import { Hero } from './shared/hero.model';

import { HeroService } from './shared/hero.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
    .then(heroesFromService => this.heroes = heroesFromService);
  }

}
