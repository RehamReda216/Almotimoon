import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";

@Component({
  selector: 'app-meetups-hero',
  imports: [ButtonComponent],
  templateUrl: './meetups-hero.component.html',
  styleUrl: './meetups-hero.component.css'
})
export class MeetupsHeroComponent {
@Input() title:string='';
@Input() p:string='';
@Input() btn:string='';
}
