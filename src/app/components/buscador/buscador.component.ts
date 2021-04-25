import { Component } from '@angular/core';
import { HeroesService, Heroe } from "../../service/heroes.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent {
  termino: string;
  public heroes: Heroe[] = [];
  
  constructor(private _heroesService:HeroesService, 
    private router:Router,
    private activatedRoute:ActivatedRoute ) {
      this.activatedRoute.params.subscribe(hero=>{    
        this.heroes = this._heroesService.buscaHeroes(hero['termino']);
        this.termino = hero['termino'];
      })
    }


  ngOnInit(): void {
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }

}
