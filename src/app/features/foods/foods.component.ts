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
  selectedFood: Food;
  foods: Food[];

  constructor(private foodService: FoodsService) {}

  ngOnInit() {
    this.getFoods();
  }

  getFoods() {
    this.foodService.getFoods()
    .subscribe(foods => this.foods = foods);
  }

  setSelected(food: Food) {
    this.selectedFood = food;
  }

  onAddBtnClick() {
    this.formVisible = true;
    this.selectedFood = null;
  }

  onNewFood(food: Food) {
    this.foodService.addFood(food)
      .subscribe(msg => console.log(msg));
    this.formVisible = false;
  }
}
