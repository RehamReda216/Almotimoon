import { Component, computed, OnInit } from '@angular/core';
import { UserdataService } from '../../services/userdata/userdata.service';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  userData = computed(() => this._userdataService.$userData());

  constructor(private _userdataService: UserdataService) {}

  ngOnInit(): void {
    // console.log(this.userData());
  }
}
