import { Component } from '@angular/core';
import { Cultura } from '../cultura';

@Component({
  selector: 'app-culturas',
  templateUrl: './culturas.component.html',
  styleUrls: ['./culturas.component.css']
})
export class CulturasComponent {
  title = "Culturas";
  culturas: Cultura[] = [];
}
