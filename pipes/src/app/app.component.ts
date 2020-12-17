import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';

  arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  personajes: string[] = ['Ironman', ' Spiderman', ' Thor', ' Loki', ' Groot', ' Superman'];

  PI: number = 3.141592653589793;
}
