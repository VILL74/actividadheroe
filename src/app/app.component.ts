import {Component} from '@angular/core';
import {SuperHero} from "./superheroe";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'superheroe';
    create = true;
    mostrarHeroesOriginales: boolean = true;
    heroes: SuperHero[] = [
        
    ]
    heroesFiltrados: SuperHero[] = [];
    
    showFormCreate() {
        this.create = true
    }
    hero: SuperHero = {} as SuperHero;

    editHero(hero: SuperHero) {
        this.create = false;
        this.hero = hero;
    }

  

    updateHero(updatedHero: SuperHero) {
        const index = this.heroes.findIndex(hero => hero.id === updatedHero.id);
        if (index !== -1) {
          this.heroes[index] = updatedHero;
        }
      }

    

  onAddHero(newHero: SuperHero) {
 
    newHero.id = this.heroes.length + 1;

    this.heroes.push(newHero);
  }

  onDeleteHero(hero: SuperHero) {
    const index = this.heroes.indexOf(hero);
    if (index !== -1) {
      this.heroes.splice(index, 1); // Elimina 1 elemento en la posición index
    }
  }


  buscarHeroes(criterio: string) {
    if (criterio.trim() === '') {
        // Si el criterio de búsqueda está vacío, mostrar los héroes originales
        this.mostrarHeroesOriginales = true;
    } else {
        // Lógica para buscar héroes filtrados...
        const criterioLower = criterio.toLowerCase();
        this.heroesFiltrados = this.heroes.filter(hero =>
            hero.name.toLowerCase().includes(criterioLower) ||
            hero.power.toLowerCase().includes(criterioLower) ||
            hero.universe.toLowerCase().includes(criterioLower)
        );
        // Cuando se realiza una búsqueda, oculta los héroes originales
        this.mostrarHeroesOriginales = false;
    }
}


  
}
