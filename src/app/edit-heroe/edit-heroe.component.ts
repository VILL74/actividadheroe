import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {SuperHero} from "../superheroe";

@Component({
    selector: 'app-edit-heroe',
    templateUrl: './edit-heroe.component.html',
    styleUrl: './edit-heroe.component.scss'
})
export class EditHeroeComponent {
    @Input() hero: SuperHero = {} as SuperHero;
    @Output() emitEditHero: EventEmitter<SuperHero> = new EventEmitter<SuperHero>

    updateHero() {
        this.emitEditHero.emit(this.hero);
    }

}
