import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from "../../partials/tags/tags.component";
import { NotFoundComponent } from "../../partials/not-found/not-found.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, SearchComponent, TagsComponent, NotFoundComponent, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else
        this.foods = foodService.getAll();
    })

  }

  ngOnInit(): void {
  }

}
