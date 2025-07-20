import { Component } from '@angular/core';
import { SectionComponent } from '../../../../shared/components/section/section.component';

@Component({
  selector: 'app-insights',
  imports: [SectionComponent],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css'
})
export class InsightsComponent {
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
