import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../food';
import { FoodsService } from 'src/app/services/foods.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  food: Food;
  constructor(private foodService: FoodsService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.getFood();
  }

  getFood() {
    const id = +this.route.snapshot.params.id;
    this.foodService.getFood(id)
      .subscribe(food => this.food = food);
  }

  onClickEdit() {
    this.router.navigate(['/foods' , this.food.id , 'edit'],
      {queryParams : {name: this.food.name} , fragment: 'editing'});
  }

  onSubmit() {
    setTimeout(() => {
      this.food.submitted = true;
      this.foodService
        .updateFood(this.food)
        .subscribe(msg => console.log(msg));
    }, 1000);
  }

  onDelete() {
    this.foodService.deleteFood(this.food)
      .subscribe(msg => console.log(msg));

    this.router.navigate(['/home']);
  }
}
