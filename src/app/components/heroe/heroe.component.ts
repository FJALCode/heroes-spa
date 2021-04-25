import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../service/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  hero: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.hero = this._heroesService.getHeroe(params['id']); 
    })    
  }

  heroeCasa(casa:string){
    let ruta:string = "assets/img/";
    return casa == 'Marvel' ? ruta + 'marvel-logo.png' : ruta + 'dc-logo.jpg';
  }

}
