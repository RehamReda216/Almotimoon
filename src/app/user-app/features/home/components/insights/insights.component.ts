import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { SectionComponent } from '../../../../shared/components/section/section.component';
import { ApiResponse } from '../../../../../shared/models/common/api-response.model';
import { Metadata } from '../../models/metadata.model';
import { MetadataService } from '../../services/metadata.service';

interface InsightCard {
  icon: string;
  value: number;
  label: string;
}

@Component({
  selector: 'app-insights',
  imports: [SectionComponent],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InsightsComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly metadataService = inject(MetadataService);
  private readonly destroyRef = inject(DestroyRef);

  readonly cards = signal<InsightCard[]>([
    {
      icon: 'fa-dove',
      value: 0,
      label: 'ملائكة التوصيل',
    },
    {
      icon: 'fa-store',
      value: 0,
      label: 'الشركاء المباركون',
    },
    {
      icon: 'fa-bag-shopping',
      value: 0,
      label: 'الوجبات المشاركة',
    },
  ]);

  readonly blogCards = [
    {
      id: 1,
      title: '5000 وجبة... في يوم واحد!',
      text: 'جهود مذهلة من مطبخ الخير وشركائنا في أحد أكبر حملاتنا.',
      image: '/assets/insights_section/blog_card1.png',
      alt: 'volunteer',
    },
    {
      id: 2,
      title: 'خلف كل وجبة.. متطوع لا يُرى',
      text: 'نروي لكم حكاية أحمد الذي يقطع يوميًا 30 كم لتوصيل الطعام للمحتاجين',
      image: '/assets/insights_section/blog_card2.png',
      alt: 'volunteer',
    },
  ];

  ngOnInit(): void {
    this.loadMetadata();
  }

  goToBlogs(): void {
    this.router.navigate(['/blogs']);
  }

  private loadMetadata(): void {
    this.metadataService
      .getAll<ApiResponse<Metadata>>()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          const data = res.data;
          if (!data) {
            return;
          }

          this.cards.set([
            {
              icon: 'fa-dove',
              value: data.volunteers_count,
              label: 'ملائكة التوصيل',
            },
            {
              icon: 'fa-store',
              value: data.food_suppliers_count,
              label: 'الشركاء المباركون',
            },
            {
              icon: 'fa-bag-shopping',
              value: data.meals_delivered,
              label: 'الوجبات المشاركة',
            },
          ]);
        },
      });
  }
}
