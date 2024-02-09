import {Component, Input} from '@angular/core';
import {SuperHero} from "../superheroe";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.scss'
})
export class HeroeComponent {
    @Input() hero: SuperHero = {} as SuperHero;
}
