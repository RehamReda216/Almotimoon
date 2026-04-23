import { Component, input } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  imports: [],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.css'
})
export class MealCardComponent {
    // signals inputs
    title = input<string>();
    image = input<string>();
    address = input<string>();
    persons = input<number>();
    preparationTime = input<string>();
}
