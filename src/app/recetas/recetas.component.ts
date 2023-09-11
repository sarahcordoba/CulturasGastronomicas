import { Component } from '@angular/core';
import { Receta } from '../receta';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {
  title = "Recetas";
  recetas: Receta[] = [];
}
