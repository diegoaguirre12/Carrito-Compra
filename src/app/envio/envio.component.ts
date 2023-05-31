import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit{

  shippingCosts!: Observable<{ tipo: string, precio: number }[]>;

  ngOnInit(): void {
    this.shippingCosts =  this.carritoService.obtenerPrecioDeEnvio();
  }
  constructor(private carritoService: CarritoService) { }
}
