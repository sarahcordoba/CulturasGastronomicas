import { Component } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  title = "Productos";
  productos: Producto[] = [];
}
