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

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    SubmittedDirective,
    FoodComponent,
    AddFoodComponent
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
    MatCheckboxModule
  ],
  providers: [FoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
