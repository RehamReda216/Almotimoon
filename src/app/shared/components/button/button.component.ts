import { Component, Input } from '@angular/core';
import { ɵEmptyOutletComponent } from "../../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
@Input() background:string='';
@Input() textColor:string='';
@Input() width:string='';
}
