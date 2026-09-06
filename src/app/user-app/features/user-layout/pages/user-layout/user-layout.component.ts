import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserdataService } from '../../../../../shared/services/userdata/userdata.service';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css',
})
export class UserLayoutComponent implements OnInit {
  private readonly userDataService = inject(UserdataService);

  ngOnInit(): void {
    this.userDataService.setUserData();
  }
}
