import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { ABOUT_SECTION_DATA } from '../../data/about-section.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
  // Inject the platform ID to detect if the code is running in the browser
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private router: Router) {}

  ngAfterViewInit() {
    // Only initialize AOS on the client (browser)
    if (isPlatformBrowser(this.platformId)) {
      // Ensure the DOM is stable before initializing AOS
      setTimeout(() => {
      AOS.init({
          duration: 1200, // Animation duration in milliseconds
          once: true, // Animation runs only once per element
        });
      }, 0);
    }
  }
  // Section content data (used in the template)
  sectionData = ABOUT_SECTION_DATA;

  goToRegistration(){
      this.router.navigate(['/registration']);
  }
}
