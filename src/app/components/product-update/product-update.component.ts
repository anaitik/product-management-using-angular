import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../services/crud-service.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  id!: number;
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.id = this.route.snapshot.params['id'];
    this.crudService.getProductById(this.id).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct() {
    this.crudService.updateProduct(this.id, this.product).subscribe(product => {
      console.log('Product updated successfully!');
    });
  }
}
