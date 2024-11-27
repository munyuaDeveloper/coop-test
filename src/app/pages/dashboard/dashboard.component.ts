import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.interface';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatIconModule],
  providers: [ProductsService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  products$ = new Observable<Product[]>();
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productService
      .getProducts()
      .pipe(map((res) => res.products));
  }
}
