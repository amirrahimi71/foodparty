import { Component, OnInit } from '@angular/core';
import { FoodsService } from 'src/app/services/foods.service';
import { Food } from '../food';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {
  food: Food;
  foodName: string;
  foodDueDate: Date;
  constructor(
    private foodService: FoodsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.getFood(id);

    this.route.params.subscribe(params => {
      const foodId = +params.id;
      this.getFood(foodId);
    });
  }

  getFood(id) {
    this.foodService.getFood(id)
      .subscribe(
        food => (
          (this.food = food),
          (this.foodName = food.name),
          (this.foodDueDate = food.dueDate)
        )
      );
  }

  onSubmit() {
    if (this.foodName) {
      this.food.name = this.foodName;
    }

    if (this.foodDueDate) {
      this.food.dueDate = this.foodDueDate;
    }

    this.foodService.updateFood(this.food).subscribe(msg => console.log(msg));
    this.router.navigate(['/home']);
  }
}
