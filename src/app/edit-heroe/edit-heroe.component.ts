import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {SuperHero} from "../superheroe";

@Component({
    selector: 'app-edit-heroe',
    templateUrl: './edit-heroe.component.html',
    styleUrl: './edit-heroe.component.scss'
})
export class EditHeroeComponent {
    @Input() hero: SuperHero = {} as SuperHero;
    @Output() updateHero: EventEmitter<SuperHero> = new EventEmitter<SuperHero>

    selectedImage: File | null = null;

  constructor() { }

  updateHeroWithImage() {
    if (this.selectedImage) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedImage);
      reader.onload = () => {
        this.hero.image = reader.result as string;
        this.updateHero.emit(this.hero);
        this.resetHero();
      };
    } else {
      this.updateHero.emit(this.hero);
      this.resetHero();
    }
  }

  resetHero() {
    this.hero = {
      id: 0,
      name: '',
      power: '',
      universe: '',
      image: ''
    };
    this.selectedImage = null;
  }

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }
    

    
}

///updateHero() {
//    this.emitEditHero.emit(this.hero);
//}