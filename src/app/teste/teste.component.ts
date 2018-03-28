import { Component, OnInit } from '@angular/core';

import { HeroService } from '../heroes/shared/hero.services';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css'],
  providers: [HeroService]
})
export class TesteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
