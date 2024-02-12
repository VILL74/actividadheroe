import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-navheroe',
  templateUrl: './navheroe.component.html',
  styleUrl: './navheroe.component.scss'
})
export class NavheroeComponent {
  @Output() showFormCreateHero: EventEmitter<void> = new EventEmitter<void>();
  @Output() buscarHeroes: EventEmitter<string> = new EventEmitter<string>();
  criterio: string = '';

  buscar() {
    this.buscarHeroes.emit(this.criterio);
  }

  onMostrar() {
    this.showFormCreateHero.emit();
  }
 
}
