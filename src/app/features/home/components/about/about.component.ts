import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  sectionData=[
    {
      id:1,
      headline: "فضل الإطعام",
      subline: "في كل كبدٍ رطبةٍ أجر",
      text_section1: "انطلاقاً من حديث",
      highlighted_text: "'خيركم من أطعم الطعام'،",
      text_section2: " يربط المطعمون المطاعم والمطابخ المنزلية والمتطوعين بجيراننا المحتاجين. كل وجبة يتم تحضيرها بنفس الجودة والحب الذي تقدمه لعائلتك.",
      image:"/assets/about_section/about_section_img1.png",
      imageAlt:"volunteer"
    },
    {
      id:2,
      headline: "المطْعِمُون",
      subline: "أكثر من وجبة - جسر من الكرامة",
      text_section1: "انطلاقاً من حديث",
      highlighted_text: "'خيركم من أطعم الطعام'،",
      text_section2: " يربط المطعمون المطاعم والمطابخ المنزلية والمتطوعين بجيراننا المحتاجين. كل وجبة يتم تحضيرها بنفس الجودة والحب الذي تقدمه لعائلتك.",
      image:"/assets/about_section/about_section_img2.png",
      imageAlt:"volunteering"
    }
  ]
}
