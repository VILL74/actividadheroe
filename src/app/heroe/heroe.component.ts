import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SuperHero} from "../superheroe";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.scss'
})
export class HeroeComponent {
    @Input() hero: SuperHero = {} as SuperHero;
    @Output() emitEditHero = new EventEmitter<SuperHero>();
    @Output() deleteHero: EventEmitter<SuperHero> = new EventEmitter<SuperHero>();
    
    constructor() { }
    editHero(hero: SuperHero) {
        this.emitEditHero.emit(hero);
    }

    onDeleteHero() {
      this.deleteHero.emit(this.hero);
    }

    
  }


