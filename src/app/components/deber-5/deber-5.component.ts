import { Component } from '@angular/core';

@Component({
  selector: 'app-deber5',
  template: `
    <!-- Carrusel de productos -->
    <p-carousel [value]="products" [responsiveOptions]="responsiveOptions" 
                [numVisible]="3" [circular]="true" [autoplayInterval]="true">
      <ng-template let-product pTemplate="item">
        <div class="product-item">
          <img [src]="product.image" alt="{{product.name}}" class="product-image"/>
          <div class="product-details">
            <h5>{{product.name}}</h5>
            <p>{{product.price | currency}}</p>
            <span [ngClass]="getSeverity(product.inventoryStatus)">
              {{product.inventoryStatus}}
            </span>
          </div>
        </div>
      </ng-template>
    </p-carousel>

    <!-- Galería de productos debajo del carrusel -->
    <h3>Galería</h3>
    <div class="gallery">
      <div *ngFor="let product of products" class="gallery-item">
        <img [src]="product.image" alt="{{product.name}}" class="gallery-image"/>
        <div class="gallery-details">
          <h5>{{product.name}}</h5>
          <p>{{product.price | currency}}</p>
          <span [ngClass]="getSeverity(product.inventoryStatus)">
            {{product.inventoryStatus}}
          </span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./deber-5.component.css'],
  standalone: false
})
export class Deber5Component {
  // Lista de libros del género oscurantista
  products = [
    { 
      name: 'El Nombre de la Rosa', 
      price: 15.99, 
      inventoryStatus: 'En stock', 
      image: 'https://images.cdn3.buscalibre.com/fit-in/360x360/d1/bb/d1bbe767c7b446cce2321333a8abfd94.jpg'
    },
    { 
      name: 'Drácula', 
      price: 12.99, 
      inventoryStatus: 'Agotado', 
      image: 'https://images.cdn3.buscalibre.com/fit-in/360x360/7b/b8/7bb83825acc199623e3177d6c44b9319.jpg'
    },
    { 
      name: 'Frankenstein', 
      price: 18.99, 
      inventoryStatus: 'En stock', 
      image: 'https://images.cdn1.buscalibre.com/fit-in/360x360/9a/e8/9ae837a621fdc1ad2d8a39d94017dfcf.jpg'
    },
    { 
      name: 'El Retrato de Dorian Gray', 
      price: 14.99, 
      inventoryStatus: 'En stock', 
      image: 'https://images.cdn2.buscalibre.com/fit-in/360x360/91/18/9118645bef1e527a3e1f14e7187ac89e.jpg'
    },
    { 
      name: 'Cuentos de la cripta', 
      price: 9.99, 
      inventoryStatus: 'En stock', 
      image: 'https://images.cdn2.buscalibre.com/fit-in/360x360/28/04/280420f8d8dbca383c0ecdeb91bed302.jpg'
    }
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 3 juegos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 2 juegos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 1 juego visible en pantallas pequeñas
      numScroll: 1
    },
  ];

  // Método para determinar el estilo según el estado del inventario
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'En stock':
        return 'success';
      case 'Agotado':
        return 'danger';
      default:
        return 'info';
    }
  }
}
