import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Tag } from '../../../shared/models/Tag';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(foodService:FoodService) {
    this.tags = foodService.getAllTags();
   }

  ngOnInit(): void {
  }

}
