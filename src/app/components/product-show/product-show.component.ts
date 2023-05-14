import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud-service.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  products: Product[] = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.crudService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  deleteProduct(productId: number): void {
    this.crudService.deleteProduct(productId).subscribe(() => {
      // remove the deleted product from the products array
      this.products = this.products.filter(p => p.id !== productId);
    });
  }

}
