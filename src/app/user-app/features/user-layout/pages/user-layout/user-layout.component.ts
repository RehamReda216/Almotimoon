import { Component, computed } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { UserdataService } from '../../../../../shared/services/userdata/userdata.service';

@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css',
})
export class UserLayoutComponent {
  userData = computed(() => this._userdataService.$userData());
  constructor(private _userdataService: UserdataService) {}
  ngOnInit(): void {
    // this._userdataService.setUserData();
    console.log(this.userData());
  }
}
