import { Component,EventEmitter,Output } from '@angular/core';
import {SuperHero} from "../superheroe";
@Component({
  selector: 'app-new-heroe',
  templateUrl: './new-heroe.component.html',
  styleUrl: './new-heroe.component.scss'
})
export class NewHeroeComponent {
  @Output() addHero: EventEmitter<any> = new EventEmitter();
  
  newHero = {
    id: 1,
    name: '',
    power: '',
    universe: '',
    image: ''
  };
  
  selectedImage: File | null = null;

  constructor() { }

  addHeroImage() {
    if (this.selectedImage) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedImage);
      reader.onload = () => {
        this.newHero.image = reader.result as string;
        this.addHero.emit(this.newHero);
        this.resetNewHero();
      };
    } else {
      this.addHero.emit(this.newHero);
      this.resetNewHero();
    }
  }

  resetNewHero() {
    this.newHero = {
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


  
  addhero() {
    this.addHero.emit(this.newHero);

    this.newHero = {
      id: 5,
      name: '',
      power: '',
      universe: '',
      image:''
    };
    
  }
  
  


  


}
  

