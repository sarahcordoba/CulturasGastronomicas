import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetasComponent } from './recetas/recetas.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { ProductosComponent } from './productos/productos.component';
import { CulturasComponent } from './culturas/culturas.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    RestaurantesComponent,
    ProductosComponent,
    CulturasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
