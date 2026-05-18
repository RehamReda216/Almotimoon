import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Carousel, initFlowbite } from 'flowbite';

@Component({
  selector: 'app-blogs',
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements AfterViewInit{

  private platformId = inject(PLATFORM_ID);
  ngAfterViewInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    setTimeout(() => {
      initFlowbite();
    }, 0);
   }
  }
}
