
import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
  
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  nombreTienda: string = 'AMARU STORE';

  encargado: string = 'Amaru Israel';

  numeroSucursal: number = 1;

 tiendaAbierta: boolean = false;
 

categorias: string[] = [
  'Celulares',
  'Accesorios',
  'Audífonos',
  'Computadoras'
];

producto: Producto = {
  nombre: 'iPhone 16',
  precio: 6500,
disponible: false
};
}
