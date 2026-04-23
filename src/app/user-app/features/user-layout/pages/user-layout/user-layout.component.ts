import { Component } from '@angular/core';
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {

}
