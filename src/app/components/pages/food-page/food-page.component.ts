import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
    selector: 'app-food-page',
    standalone: true,
    templateUrl: './food-page.component.html',
    styleUrls: ['./food-page.component.scss'],
    imports: [CommonModule, NotFoundComponent, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  constructor(activatedRoute:ActivatedRoute, foodService:FoodService,
    private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.food = foodService.getFoodById(params['id']);
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
