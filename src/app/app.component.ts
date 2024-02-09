import {Component} from '@angular/core';
import {SuperHero} from "./superheroe";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'superheroe';
    create = false;
    heroes: SuperHero[] = [
        {
            id: 1,
            name: 'Batman',
            power: 'Money',
            universe: 'DC'
        },
        {
            id: 2,
            name: 'Superman',
            power: 'Super strength',
            universe: 'DC'
        },
        {
            id: 3,
            name: 'SpiderMan',
            power: 'Spider senses',
            universe: 'Marvel'
        },
        {
            id: 4,
            name: 'Iron Man',
            power: 'Iron suit',
            universe: 'Marvel'
        }
    ]

}
