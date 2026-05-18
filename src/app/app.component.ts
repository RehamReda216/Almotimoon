import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './user-app/shared/components/header/header.component';
import { FooterComponent } from './user-app/shared/components/footer/footer.component';
import { initFlowbite } from 'flowbite';
// import * as AOS from 'aos';
import * as AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import { ButtonComponent } from './user-app/shared/components/button/button.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpClient) {}
  getData() {
    return this.httpService.get(
      'https://overarch-surfer-blatancy.ngrok-free.dev/api/metadata',
    );
  }

  ngOnInit(): void {
    // const data = this.getData().subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
    initFlowbite();
    AOS.init({
      duration: 1000, // duration of animation
      once: true, // whether animation should happen only once
    });
  }
  // https://overarch-surfer-blatancy.ngrok-free.dev/api/metadata
}
