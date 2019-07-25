import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  name: string;
  dueDate: Date;
  @Output() newFood = new EventEmitter<Food>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const food = new Food();
    food.name = this.name;
    food.dueDate = this.dueDate;
    food.submitted = false;

    this.newFood.emit(food);
  }
}
