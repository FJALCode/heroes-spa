import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() public heroeTarjeta: any = {};
  @Input() public index: any = {};

  @Output() hereoSeleccionado: EventEmitter<number>;

  constructor(private router:Router) {
    this.hereoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // this.router.navigate(['/heroe',this.index]);
    this.hereoSeleccionado.emit(this.index);
  }
}