import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../food';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  @Input() passedFood: Food;
  constructor(private foodService: FoodsService) {}

  ngOnInit() {}

  onSubmit() {
    setTimeout(() => {
      this.passedFood.submitted = true;
      this.foodService
        .updateFood(this.passedFood)
        .subscribe(msg => console.log(msg));
    }, 1000);
  }

  onDelete() {
    this.foodService.deleteFood(this.passedFood)
      .subscribe(msg => console.log(msg));

    this.passedFood = null;
  }
}
