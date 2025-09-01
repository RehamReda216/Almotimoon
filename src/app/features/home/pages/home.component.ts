import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { AboutComponent } from '../components/about/about.component';
import { BrandsComponent } from '../components/brands/brands.component';
import { ServicesComponent } from '../components/services/services.component';
import { InsightsComponent } from '../components/insights/insights.component';
import { MealsComponent } from '../components/meals/meals.component';
import { MeetupsComponent } from '../components/meetups/meetups.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,HeaderComponent,AboutComponent,BrandsComponent,ServicesComponent,InsightsComponent,MealsComponent,MeetupsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
