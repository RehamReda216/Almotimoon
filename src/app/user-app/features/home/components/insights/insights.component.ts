import { Component } from '@angular/core';
import { SectionComponent } from '../../../../shared/components/section/section.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-insights',
  imports: [SectionComponent],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css'
})
export class InsightsComponent {
  constructor(private router: Router) {}
  
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

  blogCards = [
    {
      id: 1,
      title: '5000 وجبة... في يوم واحد!',
      text: 'جهود مذهلة من مطبخ الخير وشركائنا في أحد أكبر حملاتنا.',
      image: '/assets/insights_section/blog_card1.png',
      alt: 'volunteer'
    },
    {
      id: 2,
      title: 'خلف كل وجبة.. متطوع لا يُرى',
      text: 'نروي لكم حكاية أحمد الذي يقطع يوميًا 30 كم لتوصيل الطعام للمحتاجين',
      image: '/assets/insights_section/blog_card2.png',
      alt: 'volunteer'
    }
  ];

  goToBlogs(){
      this.router.navigate(['/blogs']);
  }

}
