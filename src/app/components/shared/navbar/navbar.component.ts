import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HeroesService, Heroe} from "../../../service/heroes.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'  
})
export class NavbarComponent  {

  constructor(
    private _heroesService:HeroesService,
    private route:Router
    ) { }

  buscarHeroe(termino:string){ 
    this.route.navigate(['/buscador',termino]);    
  }

}
