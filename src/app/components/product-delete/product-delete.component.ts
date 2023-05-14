import { Component } from '@angular/core';
import { CrudService } from '../../services/crud-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
  productId!: number;
  errorMessage = '';

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.productId = +idParam;
    } else {
      this.errorMessage = 'Product ID is invalid';
    }
  }

  deleteProduct(): void {
    this.crudService.deleteProduct(this.productId).subscribe(
      () => {
        // handle successful delete
        this.router.navigate(['/products']);
      },
      (error) => {
        // handle error
        this.errorMessage = error.message;
      }
    );
  }
}
