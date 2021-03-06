import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor() { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ){

    if (form.invalid) {
      console.log('Formulario no válido');
      return;
    }

    console.log(form);
    console.log(this.heroe);  
  }

}
