import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() background: string = '';
  @Input() disabled: boolean = false;
  @Input() textColor: string = '';
  @Input() width: string = '';
  @Output() click: EventEmitter<void> = new EventEmitter<void>();
}
