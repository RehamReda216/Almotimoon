import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  imports: [],
  templateUrl: './toastr.component.html',
  styleUrl: './toastr.component.css',
})
export class ToastrComponent {
  constructor(private toastr: ToastrService) {}
}
