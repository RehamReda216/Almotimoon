import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './user-app/shared/components/header/header.component';
import { FooterComponent } from './user-app/shared/components/footer/footer.component';
import { initFlowbite } from 'flowbite';
// import * as AOS from 'aos';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
    AOS.init({
      duration: 1000, // duration of animation
      once: true, // whether animation should happen only once
    });
  }
}
