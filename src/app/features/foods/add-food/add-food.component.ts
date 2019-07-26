import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Food } from '../food';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  name: string;
  dueDate: Date;

  constructor(private foodService: FoodsService) {}

  ngOnInit() {}

  onSubmit() {
    const food = new Food();
    food.name = this.name;
    food.dueDate = this.dueDate;
    food.submitted = false;

    this.foodService.addFood(food)
      .subscribe(msg => console.log(msg));
  }
}
