import { Component } from '@angular/core';
import { BlogsComponent } from '../components/blogs/blogs.component';
import { LastMeetupsComponent } from '../components/last-meetups/last-meetups.component';
import { MeetupsHeroComponent } from '../components/meetups-hero/meetups-hero.component';

@Component({
  selector: 'app-meetups-page',
  imports: [BlogsComponent, LastMeetupsComponent, MeetupsHeroComponent],
  templateUrl: './meetups.component.html',
  styleUrl: './meetups.component.css',
})
export class MeetupsPageComponent {}
