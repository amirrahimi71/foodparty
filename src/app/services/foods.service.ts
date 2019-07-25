import { Injectable } from '@angular/core';
import { Food } from '../features/foods/food';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  foods: Food[] = [
    {
      name: 'sandwich',
      dueDate: new Date('2018-01-01'),
      submitted: true
    },
    {
      name: 'pizza',
      dueDate: new Date('2019-01-01'),
      submitted: false
    }
  ];

  constructor(private logService: LoggingService) {}

  getFoods(): Observable<Food[]> {
    return of(this.foods);
  }

  addFood(food: Food): Observable<string> {
    this.foods.push(food);

    this.logService.log(food.name, 'added');
    return of('food added!');
  }

  updateFood(food: Food): Observable<string> {
    this.foods.forEach((item , index) => {
      if (food === item) {
        this.foods[index] = food;
      }
    });
    this.logService.log(food.name, 'updated');
    return of('food updated!');
  }

  deleteFood(food: Food): Observable<string> {
    this.foods.forEach((item , index) => {
      if (food === item) {
        this.foods.splice(index, 1);
      }
    });
    this.logService.log(food.name, 'deleted');
    return of('food deleted!');
  }

}
