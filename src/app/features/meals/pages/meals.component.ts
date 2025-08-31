import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carousel, initFlowbite } from 'flowbite';
import { MealCardComponent } from '../../../shared/components/meal-card/meal-card.component';

@Component({
  selector: 'app-meals-page',
  imports: [MealCardComponent],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsPageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    initFlowbite();
  }
  constructor( private router: Router) {}
  goToRegistration(){
        this.router.navigate(['/registration']);
  }
  infoData=[
    {
      id:1,
      headline: "أماكن التوزيع",
      img_url:"assets/meals-page/location-img.png",
      sentences: [
        " الاسكندرية- المنشية",
        "الاسكندرية- سيدي جابر",
        "المعادي",
        "قرى الجيزة"
      ]
    },
    {
      id:2,
      headline: "أثر تبرعك",
      img_url:"assets/meals-page/volunteer-img.png",
      sentences: [
        " 4 وجبات تُغني أُسرة عن الجوع",
        "وجبة ساخنة تساعد طفل عالحياة",
        "سقي ماء يحافظ على كرامة إنسان",
        "اطعام أطفال يبنوا مستقبل غد"
      ]
    }
  ];

}
