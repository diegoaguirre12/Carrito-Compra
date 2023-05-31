import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  items = this.carritoService.getItems();
  total= 0;
  checkoutForm = this.formBuilder.group({
    nombre: '',
    doreccion: ''
  });

  constructor(
    private carritoService: CarritoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    for (let item of this.items) {
      this.total += item.precio;
    }
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.carritoService.limpiarCarrito();
    console.warn('Su orden ha sido enviada', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
