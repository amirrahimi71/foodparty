import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatCardModule, MatCheckboxModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsComponent } from './features/foods/foods.component';
import { SubmittedDirective } from './directives/submitted.directive';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodComponent } from './features/foods/food/food.component';
import { AddFoodComponent } from './features/foods/add-food/add-food.component';
import { FoodsService } from './services/foods.service';
import { Routes, RouterModule } from '@angular/router';
import { EditFoodComponent } from './features/foods/edit-food/edit-food.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: '' , component: FoodsComponent},
  {path: 'home' , component: FoodsComponent},
  {path: 'add' , component: AddFoodComponent},
  {path: 'foods/:id' , component: FoodComponent},
  {path: 'foods/:id/edit' , canActivate : [AuthGuard], component: EditFoodComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    SubmittedDirective,
    FoodComponent,
    AddFoodComponent,
    EditFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
