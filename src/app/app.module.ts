import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductoAlertasComponent } from './producto-alertas/producto-alertas.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { HttpClientModule } from '@angular/common/http';
import { EnvioComponent } from './envio/envio.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'productos/:productoId', component: DetalleProductoComponent },
      { path: 'carrito', component: CarritoComponent },
      { path: 'envio', component: EnvioComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductoAlertasComponent,
    DetalleProductoComponent,
    CarritoComponent,
    EnvioComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
