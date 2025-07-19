import { Component } from '@angular/core';
import { SectionComponent } from '../../../../shared/components/section/section.component';

@Component({
  selector: 'app-insights',
  imports: [SectionComponent],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css'
})
export class InsightsComponent {
  // cards = [
  //   {
  //     image: 'assets/insights_section/Dove.png',
  //     value: 89,
  //     label: 'ملائكة التوصيل',
  //     alt: 'Delivery angels icon'
  //   },
  //   {
  //     image: 'assets/insights_section/Online_Shop.png',
  //     value: 45,
  //     label: 'الشركاء المباركون',
  //     alt: 'Partner stores icon'
  //   },
  //   {
  //     image: 'assets/insights_section/Password.png',
  //     value: 1234 ,
  //     label: 'الوجبات المشاركة',
  //     alt: 'Shared meals icon'
  //   }
  // ];
  cards = [
  {
    icon: 'fa-dove',
    value: 89,
    label: 'ملائكة التوصيل',
  },
  {
    icon: 'fa-store',
    value: 45,
    label: 'الشركاء المباركون',
  },
  {
    icon: 'fa-bag-shopping',
    value: 1234,
    label: 'الوجبات المشاركة',
  }
];

}
