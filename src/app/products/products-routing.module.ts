import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponent,
  },
  {
    path: 'product/:productID',
    component: ProductCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {
  static components = [ProductCardComponent, ProductListComponent];
}
