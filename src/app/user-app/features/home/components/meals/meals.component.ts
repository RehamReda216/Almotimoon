import { Component } from '@angular/core';
import { SectionComponent } from "../../../../shared/components/section/section.component";
import { MealCardComponent } from '../../../../shared/components/meal-card/meal-card.component';

@Component({
  selector: 'app-meals',
  imports: [SectionComponent,MealCardComponent],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {
  
}
