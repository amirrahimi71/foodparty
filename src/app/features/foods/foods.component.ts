import { Component, OnInit } from '@angular/core';
import { Food } from './food';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  formVisible = false;
  foods: Food[];

  constructor(private foodService: FoodsService) {}

  ngOnInit() {
    this.getFoods();
  }

  getFoods() {
    this.foodService.getFoods()
    .subscribe(foods => this.foods = foods);
  }
}
